import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-addnewcategory',
  templateUrl: './addnewcategory.component.html',
  styleUrls: ['./addnewcategory.component.css'],
})
export class AddnewcategoryComponent implements OnInit {
  categoryForm: any;
  submitted = false;
  isSavedFailed = false;
  errormsg: any;
  constructor(
    private fb: FormBuilder,
    private admindashboardservice: AdmindashboardService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      description: [],
    });
  }
  submit() {
    this.submitted = true;
    console.log(this.categoryForm.value);

    this.admindashboardservice.addCategory(this.categoryForm.value).subscribe({
      next: (data) => {
        //console.log(data);
        this.notify.showSuccess(data.message, 'Successful');
      },
      error: (err) => {
        this.isSavedFailed = true;
        console.log(err);
      },
    });
  }
}
