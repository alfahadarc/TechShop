import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { OrderService } from 'src/app/services/client/order.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css'],
})
export class ConfirmorderComponent implements OnInit {
  orderID: any;
  order: any;

  products: any = [];
  offers: any = [];

  redeemValue: any = 0;
  rewardPoint: any = 0;
  maxRedeemTk: any = 0;
  maxOfSlide: any;
  redeemCheckBox = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderservice: OrderService,
    private notify: NotificationService,
    private location: Location,
    private clientpublicservice: ClientPublicService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (success) => {
        this.orderID = success['id'];
        this.orderservice.getSingleOrder(this.orderID).subscribe({
          next: (success) => {
            this.order = success;
            //console.log(this.order);
            this.maxRedeemTk = this.order.TOTAL_PRICE / 2;
            this.getitems(this.orderID);
            this.clientpublicservice.getRewardPoint().subscribe({
              next: (success) => {
                this.rewardPoint = success.REWARD_POINTS;

                this.maxOfSlide = Math.min(
                  this.rewardPoint,
                  Math.floor((this.order.TOTAL_PRICE / 2) * 100)
                );
              },
            });
          },
        });
      },
    });
  }

  getitems(id: any) {
    this.orderservice.getOrderItems(id).subscribe({
      next: (success) => {
        console.log(success);
        this.products = success.products;
        this.offers = success.offers;
        console.log(this.offers);
      },
    });
  }
  confirmPayment() {
    var money = this.order.TOTAL_PRICE + this.order.DELIVERY_COST;
    if (this.redeemCheckBox) {
      money =
        this.order.TOTAL_PRICE +
        this.order.DELIVERY_COST -
        this.redeemValue / 100;
    }
    var item = {
      orderID: parseInt(this.orderID),
      paidAmount: money,

      rewardPoints: this.redeemValue,
      isRedeeming: this.redeemCheckBox,
    };
    //console.log(item);
    this.orderservice.confirmPayment(item).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.messsage, 'Success');
        this.router.navigate(['allorders']);
      },
      error: (err) => {
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }
  cancelOrder() {
    this.orderservice.cancelOrder(this.orderID).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
        this.location.back();
      },
    });
  }
}
