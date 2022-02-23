import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private clientpublicservice: ClientPublicService,
    private notify: NotificationService
  ) {}
  signUpForm: any;
  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: [''],
        userRole: ['CLIENT'],
      },
      {
        validator: this.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return;
      } else {
        confirmPasswordControl.setErrors(null);
        return;
      }
    };
  }

  submit() {
    this.clientpublicservice.signup(this.signUpForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess('please log in to continue', success.message);
      },
      error: (err) => {
        this.notify.showWarning('Can not sign up', '');
      },
    });
  }
}
