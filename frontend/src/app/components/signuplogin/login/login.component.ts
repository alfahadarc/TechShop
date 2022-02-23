import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { NotificationService } from 'src/app/services/utill/notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  isLoggedIn = false;
  isLoginFailed = false;
  submitted = false;
  errorMessage = '';
  roles: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private notify: NotificationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  submit() {
    this.submitted = true;

    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.USER_ROLE);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser();
        if (this.roles) {
          if (this.roles === 'ADMIN') {
            this.router.navigate(['admindashboard']);
          } else if (this.roles === 'CLIENT') {
            this.location.back();
          } else if (this.roles === 'ASSEMBLER') {
            this.router.navigate(['assembler']);
          } else if (this.roles === 'DELIVERY_MAN') {
            this.router.navigate(['delivery']);
          }
        }
      },
      error: (err) => {
        console.log(err.error.message);
        this.notify.showError(err.error.message, 'Login Failed');
        //this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }
}
