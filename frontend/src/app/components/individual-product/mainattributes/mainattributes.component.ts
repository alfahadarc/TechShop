import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/client/cart.service';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-mainattributes',
  templateUrl: './mainattributes.component.html',
  styleUrls: ['./mainattributes.component.css'],
})
export class MainattributesComponent implements OnInit {
  @Input() Attribute: any;
  inputnumber: any = '1';
  btnLabel = 'Add To Cart';
  inWishList = false;
  update = false;
  ratting: any = 0;
  totalReview = 0;

  constructor(
    private cartService: CartService,
    private notify: NotificationService,
    private router: Router,
    private clientpublicservice: ClientPublicService
  ) {}

  ngOnInit(): void {
    if (this.Attribute) {
      // console.log(this.Attribute);
      
      this.clientpublicservice.getAvgRatting(this.Attribute.ITEM_ID).subscribe({
        next: (success) => {
          this.ratting = success.AVERAGE;
        },
      });
      this.clientpublicservice.getReviews(this.Attribute.ITEM_ID).subscribe({
        next: (success) => {
          this.totalReview = success.length;
        },
      });
      if (parseInt(this.Attribute.STOCK) == 0) {
        this.btnLabel = 'Pre Order';
      }
      this.clientpublicservice.isInWishList(this.Attribute.ITEM_ID).subscribe({
        next: (success) => {
          this.inWishList = success.EXIST;
        },
      });
      this.getQuantity();
    }
  }
  getQuantity() {
    this.cartService.getProductCartQuantity(this.Attribute.ITEM_ID).subscribe({
      next: (success) => {
        if (success.QUANTITY != 0) {
          this.inputnumber = success.QUANTITY;
          this.btnLabel = 'Update Cart';
          this.update = true;
        } else if (success.QUANTITY === 0) {
          this.update = false;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  plus() {
    this.inputnumber = parseInt(this.inputnumber) + 1;
  }
  minus() {
    if (this.inputnumber > 1) {
      this.inputnumber = parseInt(this.inputnumber) - 1;
    }
  }
  addToCart() {
    this.cartService
      .addToCart(this.Attribute.ITEM_ID, parseInt(this.inputnumber))
      .subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'Success');
          window.location.reload();
        },
        error: (err) => {
          this.notify.showInfo(err.error.message, 'Please Log in');
          if (err.status === 401) {
            this.router.navigate(['auth']);
          }
        },
      });
  }
  hasExpired(d:any){
    return d<Date.now();
  }
  addToWishList() {
    this.clientpublicservice
      .addItemToWishList(this.Attribute.ITEM_ID)
      .subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'Success');
          this.inWishList = true;
        },
        error: (err) => {
          if (err.status === 401) {
            this.notify.showInfo(err.error.message, 'Please Log In');
            this.router.navigate(['auth']);
          }
        },
      });
  }
}
