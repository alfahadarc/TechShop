import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EditserviceService } from 'src/app/services/admin/editservice.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css'],
})
export class EditcategoryComponent implements OnInit {
  categoryForm: any;
  fileName = '';
  imageToShow: any;
  constructor(
    private editservice: EditserviceService,
    private fb: FormBuilder,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      description: [],
      categoryID: [],
    });
    if (this.editservice.getCategory()) {
      this.populateForm(this.editservice.getCategory());
    }
  }
  populateForm(value: any) {
    this.categoryForm.controls.categoryID.setValue(value.CATEGORY_ID);
    this.categoryForm.controls.categoryName.setValue(value.CATEGORY_NAME);
    this.categoryForm.controls.description.setValue(value.DESCRIPTION);
  }
  update() {
    console.log(this.categoryForm.value);
    this.editservice.updateCategory(this.categoryForm.value).subscribe({
      next: (success) => {
        console.log(success);
        this.notify.showSuccess(success.message, 'Successfull');
      },
      error: (err) => {
        console.log(err);
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }
}
