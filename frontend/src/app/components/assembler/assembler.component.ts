import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssemblerService } from 'src/app/services/assembler/assembler.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-assembler',
  templateUrl: './assembler.component.html',
  styleUrls: ['./assembler.component.css'],
})
export class AssemblerComponent implements OnInit {
  pendingOrders: any;
  constructor(
    private asmblrservice: AssemblerService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.asmblrservice.getPendingOrder().subscribe({
      next: (success) => {
        console.log(success);
        this.pendingOrders = success;
      },
    });
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
