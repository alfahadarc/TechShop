import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.css'],
})
export class AddnewproductComponent implements OnInit {
  categories: any;
  manufacturers: any;
  productForm!: FormGroup;
  submitted = false;
  isSavedFailed = false;
  errormsg: any;
  fileName = '';
  filePath = '';
  imageToShow: any;
  numericAttributes: any;
  genericAttribute: any;

  constructor(
    private fb: FormBuilder,
    private admindashboardservice: AdmindashboardService,
    private notify: NotificationService
  ) {
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

    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      summary: [],
      isFeatured: false,
      isContinued: false,
      stock: ['', Validators.required],
      discount: [],
      discountExpireDate: [],
      category: ['', Validators.required],
      manufacturer: ['', Validators.required],
      numericComponents: this.fb.array([]),
      descriptiveComponents: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

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
    this.descriptiveComponents.removeAt(ind);
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

    if (this.productForm.value.discountExpireDate) {
      let date = Date.parse(this.productForm.value.discountExpireDate);
      this.productForm.value.discountExpireDate = date;
    }
  }

  submit() {
    this.processing();
    this.submitted = true;
    if (
      this.numericAttributesCheck(this.productForm.value.numericComponents) &&
      this.descriptiveComponentsCheck(
        this.productForm.value.descriptiveComponents
      )
    ) {
      this.admindashboardservice
        .addNewProduct(this.productForm.value)
        .subscribe({
          next: (data) => {
            this.notify.showSuccess(data.message, 'Successful');
          },
          error: (err) => {
            console.log(err);
            this.notify.showError(err.error.message, 'error');
          },
        });
    }
  }

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
