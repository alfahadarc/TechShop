import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/client/cart.service';
import { OrderService } from 'src/app/services/client/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  allItemInCart: any = [];
  totalPrice = 0;
  allOrder: any = [];
  products: any = [];
  offers: any = [];
  constructor(
    private route: ActivatedRoute,
    private cartservice: CartService,
    private orderservice: OrderService
  ) {}

  ngOnInit(): void {
    this.cartservice.getCartProduct().subscribe({
      next: (success) => {
        this.allItemInCart = success;
        //console.log(this.allItemInCart);
        this.products = this.allItemInCart.filter((x: any) => {
          if (x.TYPE == 'PRODUCT') return true;
          else return false;
        });
        this.offers = this.allItemInCart.filter((x: any) => {
          if (x.TYPE == 'OFFER') return true;
          else return false;
        });
        this.getTotal(success);
        this.createOrder(success);
      },
    });
  }
  createOrder(val: any) {
    for (var i = 0; i < val.length; i++) {
      var itemID = val[i].ITEM_ID;
      var qnt = val[i].QUANTITY;
      var obj = {
        itemID: itemID,
        quantity: qnt,
      };
      this.allOrder.push(obj);
    }
    //console.log(this.allOrder);
  }
  getTotal(val: any) {
    for (var i = 0; i < val.length; i++) {
      var discount = val[i].DISCOUNT;
      var price = val[i].PRICE;
      var actualPrice = price - price * (discount / 100);
      var qnt = val[i].QUANTITY;
      this.totalPrice += actualPrice * qnt;
    }
    //console.log(this.totalPrices);
  }
}
