import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-addnewoffer',
  templateUrl: './addnewoffer.component.html',
  styleUrls: ['./addnewoffer.component.css'],
})
export class AddnewofferComponent implements OnInit {
  offerForm: any;
  allProducts: any;
  constructor(
    private fb: FormBuilder,
    private notify: NotificationService,
    private admindashboardservice: AdmindashboardService
  ) {
    //get all product from back end

    this.admindashboardservice.getAllProducts().subscribe({
      next: (success) => {
        this.allProducts = success;
        //console.log(this.allProducts);
      },
    });

    this.offerForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      summary: [],
      isFeatured: false,
      isContinued: false,
      expireDate: [],
      products: this.fb.array([]),
      freeProducts: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get products(): FormArray {
    return this.offerForm.controls['products'] as FormArray;
  }
  get freeProducts(): FormArray {
    return this.offerForm.controls['freeProducts'] as FormArray;
  }

  addproducts() {
    const product = this.fb.group({
      //title: ['', Validators.required],
      productID: ['', Validators.required],
      count: [0, Validators.required],
    });

    this.products.push(product);
  }

  addfreeProducts() {
    const product = this.fb.group({
      // title: ['', Validators.required],
      productID: ['', Validators.required],
      count: [0, Validators.required],
    });

    this.freeProducts.push(product);
  }
  deleteproducts(id: any) {
    this.products.removeAt(id);
  }
  deletefreeProducts(id: any) {
    this.freeProducts.removeAt(id);
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

  submit() {
    this.processing();
    if (
      this.check(
        this.offerForm.value.products,
        this.offerForm.value.freeProducts
      )
    ) {
      console.log(this.offerForm.value);
      this.admindashboardservice.addOffer(this.offerForm.value).subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'Success');
        },
        error: (err) => {
          this.notify.showError(err.error.message, 'Error');
        },
      });
    }
  }

  check(val1: any, val2: any) {
    let tempArray: any = [];
    val1.forEach((element: any) => {
      tempArray.push(element.productID);
    });
    val2.forEach((element: any) => {
      tempArray.push(element.productID);
    });
    if (new Set(tempArray).size !== tempArray.length) {
      this.notify.showWarning('Can not add same product twice', 'Error');
      return false;
    } else {
      return true;
    }
  }
}
