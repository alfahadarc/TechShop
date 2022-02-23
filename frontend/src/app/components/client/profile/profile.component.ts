import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  points: any = 0;

  profileForm: any;
  constructor(
    private fb: FormBuilder,
    private clientpublicservice: ClientPublicService,
    private notify: NotificationService
  ) {
    this.profileForm = this.fb.group({
      ADDRESS_DESCRIPTION: [''],
      PHONE_NUMBER: [''],
    });
  }

  ngOnInit(): void {
    this.clientpublicservice.getRewardPoint().subscribe({
      next: (success) => {
        this.points = success.REWARD_POINTS;
      },
    });
    this.clientpublicservice.getProfile().subscribe({
      next: (success) => {
        this.profile = success;
        this.popuplateform(this.profile);
      },
    });
  }

  popuplateform(val: any) {
    this.profileForm.controls['ADDRESS_DESCRIPTION'].setValue(
      val.ADDRESS_DESCRIPTION
    );
    this.profileForm.controls['PHONE_NUMBER'].setValue(val.PHONE_NUMBER);
  }

  submit() {
    console.log(this.profileForm.value);
    this.clientpublicservice.updateProfile(this.profileForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
      },
    });
  }
}
