import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/client/cart.service';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-clientheader',
  templateUrl: './clientheader.component.html',
  styleUrls: ['./clientheader.component.css'],
})
export class ClientheaderComponent implements OnInit {
  cartValue: any = 0;
  isLoggedIn = false;
  username: any;
  //inWishList = false;
  constructor(
    private router: Router,
    private cartService: CartService,
    private clientpublicservice: ClientPublicService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientpublicservice.isLoggedin().subscribe({
      next: (success) => {
        this.isLoggedIn = true;
        this.username = success.USER_NAME;
      },
      error: (err) => {},
    });
    this.cartService.getCartProduct().subscribe({
      next: (success) => {
        this.cartValue = success.length;
        //console.log(this.cartValue);
      },
      error: (err) => {},
    });

    this.cartService.cartValue.subscribe({
      next: (val) => {
        this.cartValue = this.cartValue + val;
      },
      error: (err) => {},
    });

    // this.clientpublicservice.getFullWishList().subscribe({
    //   next: (success) => {
    //     if (success.length !== 0) {
    //       this.inWishList = true;
    //     }
    //   },
    // });
  }
  goAchievement() {
    this.router.navigate(['achievement']);
  }

  goToCartList() {
    //if logged in
    this.router.navigate(['cartlist']);
  }
  allorder() {
    this.router.navigate(['allorders']);
  }
  gotToWishList() {
    this.router.navigate(['wishlist']);
  }
  goSignupLoginPage() {
    this.router.navigate(['auth']);
  }
  goProfile() {
    this.router.navigate(['profile']);
  }
  logout(): void {
    this.route.url.subscribe({
      next: (success) => {
        if (success[0].path == 'home') {
          this.authService.logout().subscribe({
            next: (data) => {
              this.tokenStorage.signOut();
              window.location.reload();
            },
            error: (err) => {
              console.log(err);
            },
          });
        } else {
          this.authService.logout().subscribe({
            next: (data) => {
              this.tokenStorage.signOut();
              this.router.navigate(['home']);
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      },
    });
  }
}
