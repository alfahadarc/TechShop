import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { EditserviceService } from 'src/app/services/admin/editservice.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent implements OnInit {
  categories: any;
  manufacturers: any;
  productForm: any;
  productID: any;
  fileName = '';
  imageToShow: any;
  numericAttributes: any;
  genericAttribute: any;
  descriptiveComponentsOld: any;
  numericComponentsOld: any;
  url: any;
  format: any;

  //for adding
  numericAttributesForm: any;
  genericAttributeForm: any;

  constructor(
    private fb: FormBuilder,
    private editservice: EditserviceService,
    private admindashboardservice: AdmindashboardService,
    private notify: NotificationService,
    private route: ActivatedRoute
  ) {
    //adding form
    this.numericAttributesForm = this.fb.group({
      title: ['', Validators.required],
      value: ['', Validators.required],
      unit: [''],
    });

    this.genericAttributeForm = this.fb.group({
      title: ['', Validators.required],
      specification: ['', Validators.required],
    });
  }

  //for adding need to move
  addNumeric() {
    console.log(this.numericAttributesForm.value);
  }
  addGeneric() {
    console.log(this.genericAttributeForm.value);
  }
  updateNumeric(i: any) {
    console.log(i.value);
  }
  updateGeneric(i: any) {
    console.log(i.value);
  }

  ngOnInit(): void {
    this.admindashboardservice.getAllCategory().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.admindashboardservice.getAllMAnufacturer().subscribe({
      next: (data) => {
        this.manufacturers = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.admindashboardservice.getAllNumericComponents().subscribe({
      next: (data) => {
        this.numericAttributes = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.admindashboardservice.getAllNonNumericComponents().subscribe({
      next: (data) => {
        this.genericAttribute = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    if (this.editservice.getProduct()) {
      this.productID = this.route.snapshot.paramMap.get('id');
      // this.productID = this.editservice.getProduct().ITEM_ID;
      this.getImage(this.productID);
    }
    this.productID = this.route.snapshot.paramMap.get('id');
    this.getImage(this.productID);
    this.getVideo(this.productID);

    //need a service to get this product from backend
    this.editservice.getSingleProduct(this.productID).subscribe({
      next: (success) => {
        this.editservice.getProductComponets(this.productID).subscribe({
          next: (components) => {
            this.descriptiveComponentsOld = components.descriptiveComponents;
            this.numericComponentsOld = components.numericComponents;
            this.populateForm(
              success,
              this.descriptiveComponentsOld,
              this.numericComponentsOld
            );
          },
          error: (err) => {},
        });
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.productForm = this.fb.group({
      itemID: [],
      title: ['', Validators.required],
      price: [Validators.required],
      summary: [],
      isFeatured: false,
      isContinued: false,
      stock: [Validators.required],
      discount: [],
      discountExpireDate: [],
      category: ['', Validators.required],
      manufacturer: ['', Validators.required],
      numericComponents: this.fb.array([]),
      descriptiveComponents: this.fb.array([]),
    });
  }

  get numericComponents(): FormArray {
    return this.productForm.controls['numericComponents'] as FormArray;
  }

  get descriptiveComponents() {
    return this.productForm.controls['descriptiveComponents'] as FormArray;
  }

  addnumericComponents() {
    const numeric = this.fb.group({
      title: ['', Validators.required],
      value: ['', Validators.required],
      unit: [''],
    });

    this.numericComponents.push(numeric);
  }

  deleteNumeric(ind: any) {
    //will be change
    this.numericComponents.removeAt(ind);
  }
  adddescriptiveComponents() {
    const nonNumeric = this.fb.group({
      title: ['', Validators.required],
      specification: ['', Validators.required],
    });
    this.descriptiveComponents.push(nonNumeric);
  }
  deletedescriptiveComponents(ind: any) {
    //will be change
    this.descriptiveComponents.removeAt(ind);
  }

  populateForm(
    value: any,
    descriptiveComponentsOld: any,
    numericComponentsOld: any
  ) {
    this.productForm.controls.itemID.setValue(this.productID);
    this.productForm.controls.title.setValue(value.TITLE);
    this.productForm.controls.price.setValue(value.PRICE);
    this.productForm.controls.summary.setValue(value.SUMMARY);
    if (value.IS_CONTINUED === 1) {
      this.productForm.controls.isContinued.setValue(true);
    }
    if (value.IS_FEATURED === 1) {
      this.productForm.controls.isFeatured.setValue(true);
    }

    this.productForm.controls.stock.setValue(value.STOCK);
    this.productForm.controls.discount.setValue(value.DISCOUNT);
    //date parse

    this.productForm.controls.discountExpireDate.setValue(
      new Date(value.DISCOUNT_EXPIRE_DATE)
    );
    this.productForm.controls.category.setValue(value.CATEGORY_ID);
    this.productForm.controls.manufacturer.setValue(value.MANUFACTURER_ID);

    let descriptiveComponentsControl = <FormArray>(
      (this.productForm.controls['descriptiveComponents'] as FormArray)
    );
    if (descriptiveComponentsOld) {
      descriptiveComponentsOld.forEach((x: any) => {
        descriptiveComponentsControl.push(
          this.fb.group({
            title: x.TITLE,
            specification: x.SPECIFICATION,
          })
        );
      });
    }
    let numericComponentsControl = <FormArray>(
      (this.productForm.controls['numericComponents'] as FormArray)
    );
    if (numericComponentsOld) {
      numericComponentsOld.forEach((x: any) => {
        numericComponentsControl.push(
          this.fb.group({
            title: x.TITLE,
            value: x.VALUE,
            unit: x.UNIT,
          })
        );
      });
    }
  }

  processing() {
    if (this.productForm.value.isContinued) {
      this.productForm.value.isContinued = 1;
    } else {
      this.productForm.value.isContinued = 0;
    }

    if (this.productForm.value.isFeatured) {
      this.productForm.value.isFeatured = 1;
    } else {
      this.productForm.value.isFeatured = 0;
    }

    let date = Date.parse(this.productForm.value.discountExpireDate);
    this.productForm.value.discountExpireDate = date;
  }

  update() {
    this.processing();
    if (
      this.numericAttributesCheck(this.productForm.value.numericComponents) &&
      this.descriptiveComponentsCheck(
        this.productForm.value.descriptiveComponents
      )
    ) {
      this.editservice.updateProduct(this.productForm.value).subscribe({
        next: (success) => {
          //console.log(success);
          this.notify.showSuccess(success.message, 'Successful');
        },
        error: (err) => {
          //console.log(err);
          this.notify.showError(err.error.message, 'Can not update');
        },
      });
    }
  }
  getImage(id: any) {
    this.editservice.getProductMainImage(id).subscribe({
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
    fd.append('productMainImage', file);
    this.editservice.sendProductMainImage(fd, this.productID).subscribe({
      next: (res) => {
        this.notify.showSuccess(res.message, 'Successful');
      },
      error: (err) => {
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }
  //vide section
  getVideo(id: any) {
    this.editservice.getTutorialVideo(id).subscribe({
      next: (success) => {
        this.createVideo(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  createVideo(video: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.url = reader.result;
        this.format = 'video';
      },
      false
    );

    if (video) {
      reader.readAsDataURL(video);
    }
  }
  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      };
      this.UploadVideo(file);
    }
  }
  UploadVideo(file: any) {
    const fd = new FormData();
    fd.append('tutorialVideo', file);
    this.editservice.uploadVideo(this.productID, fd).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
      },
      error: (err) => {
        this.notify.showWarning(err.error.message, 'Error');
      },
    });
  }

  //end

  numericAttributesCheck(val: any) {
    let tempArray: any = [];
    val.forEach((element: any) => {
      tempArray.push(element.title);
    });
    if (new Set(tempArray).size !== tempArray.length) {
      this.notify.showError(
        'Can not add same Numeric/Generic attribute twice',
        'Error'
      );
      return false;
    } else {
      return true;
    }
  }
  descriptiveComponentsCheck(val: any) {
    let tempArray: any = [];
    val.forEach((element: any) => {
      tempArray.push(element.title);
    });
    if (new Set(tempArray).size !== tempArray.length) {
      this.notify.showError('Can not add same attribute twice', 'Error');
      return false;
    } else {
      return true;
    }
  }
}
