import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssemblerService } from 'src/app/services/assembler/assembler.service';
import { AuthService } from 'src/app/services/auth.service';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-deliverymancompo',
  templateUrl: './deliverymancompo.component.html',
  styleUrls: ['./deliverymancompo.component.css'],
})
export class DeliverymancompoComponent implements OnInit {
  pendingOrders: any;
  constructor(
    private deliveryservice: DeliveryService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.deliveryservice.getAllOrder().subscribe({
      next: (success) => {
        this.pendingOrders = success;
        console.log(success);
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
