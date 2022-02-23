import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-addnewmanufacture',
  templateUrl: './addnewmanufacture.component.html',
  styleUrls: ['./addnewmanufacture.component.css'],
})
export class AddnewmanufactureComponent implements OnInit {
  manufacturerForm: any;
  submitted = false;
  isSavedFailed = false;
  errormsg: any;
  constructor(
    private fb: FormBuilder,
    private admindashboardservice: AdmindashboardService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.manufacturerForm = this.fb.group({
      manufacturerName: ['', Validators.required],
      motto: [],
      description: [],
    });
  }

  submit() {
    this.submitted = true;
    console.log(this.manufacturerForm.value);

    this.admindashboardservice
      .addManufacturer(this.manufacturerForm.value)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.notify.showSuccess(data.message, 'Successful');
        },
        error: (err) => {
          this.isSavedFailed = true;
          console.log(err);
        },
      });
  }
}
