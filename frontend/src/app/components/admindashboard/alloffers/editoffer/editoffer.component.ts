import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { EditserviceService } from 'src/app/services/admin/editservice.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
  styleUrls: ['./editoffer.component.css'],
})
export class EditofferComponent implements OnInit {
  offerForm: any;
  allProducts: any;
  offerID: any;
  fileName = '';
  imageToShow: any;
  //include product
  mainProducts: any;
  mainFreeProducts: any;
  //adding form
  newOfferProductForm: any;
  newOfferFreeProductForm: any;

  constructor(
    private fb: FormBuilder,
    private notify: NotificationService,
    private admindashboardservice: AdmindashboardService,
    private route: ActivatedRoute,
    private editservice: EditserviceService
  ) {
    this.offerID = this.route.snapshot.paramMap.get('id');

    //getimage
    //get all product

    this.offerForm = this.fb.group({
      offerID: [],
      title: ['', Validators.required],
      price: ['', Validators.required],
      summary: [],
      isFeatured: false,
      isContinued: false,
      expireDate: [],
      products: this.fb.array([]),
      freeProducts: this.fb.array([]),
    });

    this.newOfferProductForm = this.fb.group({
      offerID: [],
      productID: ['', Validators.required],
      count: [],
    });
    this.newOfferFreeProductForm = this.fb.group({
      offerID: [],
      productID: ['', Validators.required],
      count: [],
    });
  }

  ngOnInit(): void {
    this.getImage(this.offerID);
    this.editservice.getSingleOffer(this.offerID).subscribe({
      next: (success) => {
        this.editservice.getOfferIncludedProduct(this.offerID).subscribe({
          next: (data) => {
            this.mainProducts = data.products;
            this.mainFreeProducts = data.freeProducts;
            this.populateForm(
              success,
              this.mainProducts,
              this.mainFreeProducts
            );
          },
        });
      },
    });
    this.admindashboardservice.getAllProducts().subscribe({
      next: (success) => {
        this.allProducts = success;
      },
    });
  }

  populateForm(val: any, mainProducts: any, mainFreeProducts: any) {
    this.offerForm.controls.offerID.setValue(this.offerID);
    this.offerForm.controls.title.setValue(val.TITLE);
    this.offerForm.controls.price.setValue(val.PRICE);
    this.offerForm.controls.summary.setValue(val.SUMMARY);
    if (val.IS_CONTINUED === 1) {
      this.offerForm.controls.isContinued.setValue(true);
    }
    if (val.IS_FEATURED === 1) {
      this.offerForm.controls.isFeatured.setValue(true);
    }
    if (val.EXPIRE_DATE !== null) {
      this.offerForm.controls.expireDate.setValue(new Date(val.EXPIRE_DATE));
    }

    let productControl = <FormArray>(
      (this.offerForm.controls['products'] as FormArray)
    );

    if (mainProducts) {
      mainProducts.forEach((x: any) => {
        productControl.push(
          this.fb.group({
            productID: x.PRODUCT_ID,
            count: x.COUNT,
          })
        );
      });
    }

    //need work

    let freeProductControl = <FormArray>(
      (this.offerForm.controls['freeProducts'] as FormArray)
    );
    //need work
    if (mainFreeProducts) {
      mainFreeProducts.forEach((x: any) => {
        freeProductControl.push(
          this.fb.group({
            productID: x.PRODUCT_ID,
            count: x.COUNT,
          })
        );
      });
    }
  }

  get products(): FormArray {
    return this.offerForm.controls['products'] as FormArray;
  }
  get freeProducts(): FormArray {
    return this.offerForm.controls['freeProducts'] as FormArray;
  }

  deleteproducts(id: any, val: any) {
    this.editservice
      .deleteOfferProduct(this.offerID, val.value.productID)
      .subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'success');
          this.products.removeAt(id);
        },
      });
  }
  deletefreeProducts(id: any, val: any) {
    this.editservice
      .deleteOfferProduct(this.offerID, val.value.productID)
      .subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'success');
          this.freeProducts.removeAt(id);
        },
      });
  }

  processing() {
    if (this.offerForm.value.isContinued) {
      this.offerForm.value.isContinued = 1;
    } else {
      this.offerForm.value.isContinued = 0;
    }

    if (this.offerForm.value.isFeatured) {
      this.offerForm.value.isFeatured = 1;
    } else {
      this.offerForm.value.isFeatured = 0;
    }
    if (this.offerForm.value.expireDate) {
      let date = Date.parse(this.offerForm.value.expireDate);
      this.offerForm.value.expireDate = date;
    }
  }

  update() {
    this.processing();

    this.editservice.updateOnlyOffer(this.offerForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
      },
    });
  }

  //update functions
  updateProduct(val: any) {
    const product = {
      offerID: this.offerID,
      productID: val.value.productID,
      count: val.value.count,
    };

    this.editservice.updateOfferProduct(product).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
      },
    });
  }

  updateFreeProduct(val: any) {
    const product = {
      offerID: this.offerID,
      productID: val.value.productID,
      count: val.value.count,
    };
    this.editservice.updateOfferFreeProduct(product).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
      },
    });
  }

  //adding function
  addMainProduct() {
    this.newOfferProductForm.controls.offerID.setValue(parseInt(this.offerID));
    this.newOfferProductForm.controls.productID.setValue(
      parseInt(this.newOfferProductForm.value.productID)
    );
    //console.log(this.newOfferProductForm.value);
    this.editservice.addOfferProduct(this.newOfferProductForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'success');
        window.location.reload();
      },
      error: (err) => {
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }

  addMainFreeProduct() {
    this.newOfferFreeProductForm.controls.offerID.setValue(
      parseInt(this.offerID)
    );
    this.newOfferFreeProductForm.controls.productID.setValue(
      parseInt(this.newOfferFreeProductForm.value.productID)
    );
    //console.log(this.newOfferFreeProductForm.value);
    this.editservice
      .addOfferFreeProduct(this.newOfferFreeProductForm.value)
      .subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'success');
          window.location.reload();
        },
        error: (err) => {
          this.notify.showError(err.error.message, 'Error');
        },
      });
  }

  getImage(id: any) {
    this.editservice.getOfferMainImage(id).subscribe({
      next: (success) => {
        this.createImageFromBlob(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    var imageType = /image.png/;
    console.log(file.type);
    if (file && file.type.match(imageType)) {
      this.fileName = file.name;
      this.onUpload(file);
    } else {
      this.notify.showWarning('Only png format is supported', 'Invaild File');
    }
  }
  onUpload(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageToShow = reader.result as string;
    };
    reader.readAsDataURL(file);

    const fd = new FormData();
    fd.append('offerImage', file);
    this.editservice.uploadOfferMainImage(this.offerID, fd).subscribe({
      next: (res) => {
        this.notify.showSuccess(res.message, 'Successful');
      },
      error: (err) => {
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }
}
