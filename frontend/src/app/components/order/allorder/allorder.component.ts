import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/client/order.service';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css'],
})
export class AllorderComponent implements OnInit {
  constructor(private orderservice: OrderService) {}
  allOrders: any = [];
  deliveredOrder: any = [];
  notdeliveredOrder: any = [];
  ngOnInit(): void {
    this.orderservice.getAllOrder().subscribe({
      next: (success) => {
        console.log(success);
        this.allOrders = success;
        this.deliveredOrder = this.allOrders.filter((x: any) => {
          if (x.ORDER_STATUS == 'DELIVERED') return true;
          else return false;
        });
        this.notdeliveredOrder = this.allOrders.filter((x: any) => {
          if (x.ORDER_STATUS !== 'DELIVERED') return true;
          else return false;
        });
      },
    });
  }
}
