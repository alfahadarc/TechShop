import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-addnewdeliveryman',
  templateUrl: './addnewdeliveryman.component.html',
  styleUrls: ['./addnewdeliveryman.component.css'],
})
export class AddnewdeliverymanComponent implements OnInit {
  personForm: any;
  Roles = ['ADMIN', 'DELIVERY_MAN', 'ASSEMBLER'];
  constructor(
    private fb: FormBuilder,
    private admindashboardservice: AdmindashboardService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  submit() {
    //console.log(this.personForm.value);
    this.admindashboardservice.addEmployee(this.personForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
      },
      error: (err) => {
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }
}
