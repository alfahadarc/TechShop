import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/client/cart.service';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-offermainattributes',
  templateUrl: './offermainattributes.component.html',
  styleUrls: ['./offermainattributes.component.css'],
})
export class OffermainattributesComponent implements OnInit {
  @Input() Offer: any;
  inWishList = false;
  btnLabel = 'Add To Cart';
  update = false;
  constructor(
    private clientpublicservice: ClientPublicService,
    private notify: NotificationService,
    private router: Router,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    //console.log(this.Offer);
    if (this.Offer) {
      console.log(this.Offer);
      this.clientpublicservice.isInWishList(this.Offer.ITEM_ID).subscribe({
        next: (success) => {
          this.inWishList = success.EXIST;
        },
      });

      this.getQuantity();
    }
  }
  getQuantity() {
    this.cartservice.getOfferQuantity(this.Offer.ITEM_ID).subscribe({
      next: (success) => {
        if (success.QUANTITY != 0) {
          this.btnLabel = 'Update Cart';
          this.update = true;
        } else if (success.QUANTITY === 0) {
          this.update = false;
        }
      },
    });
  }
  addToCart() {
    var data = {
      offerID: this.Offer.ITEM_ID,
    };
    this.cartservice.addOfferToCart(data).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'success');
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
  addToWishList() {
    this.clientpublicservice.addItemToWishList(this.Offer.ITEM_ID).subscribe({
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
