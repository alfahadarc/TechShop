import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css'],
})
export class AdminheaderComponent implements OnInit {
  role: string | undefined;
  admin = 'ADMIN';
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  showRequest() {
    this.router.navigate(['asmblrequest']);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (data) => {
        this.tokenStorage.signOut();
        console.log(data);
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
