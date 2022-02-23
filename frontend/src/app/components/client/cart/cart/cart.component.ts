import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/client/cart.service';
import { OrderService } from 'src/app/services/client/order.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public dataSource = new MatTableDataSource<any>([]);

  displayedColumns: string[] = ['TITLE', 'QUANTITY', 'actions'];
  isLoading = true;
  itemsnumber = 0;

  //order place
  orderForm: any;
  district: any = [];
  districtId: any;
  subdistrict: any = [];

  constructor(
    private cartSevice: CartService,
    private router: Router,
    private fb: FormBuilder,
    private orderservice: OrderService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.cartSevice.getCartProduct().subscribe({
      next: (success) => {
        this.isLoading = false;
        this.dataSource.data = success;
        this.itemsnumber = success.length;
        //console.log(this.itemsnumber);
      },
      error: (err) => {},
    });
  }

  //all works below it

  onDelete(id: any) {
    //console.log(id);

    this.cartSevice.deleteFromCart(id).subscribe({
      next: (val) => {
        this.cartSevice.getCartProduct().subscribe({
          next: (success) => {
            this.isLoading = false;
            this.dataSource.data = success;
            this.itemsnumber = success.length;
          },
          error: (err) => {},
        });

        window.location.reload();
      },
      error: (err) => {},
    });
    //call from backend to get new data
  }
  goPlaceOrder() {
    this.router.navigate(['placeorder']);
  }
  individualProduct(element: any) {
    if (element.TYPE == 'PRODUCT') {
      this.router.navigate(['product/' + element.ITEM_ID]);
    } else if (element.TYPE == 'OFFER') {
      this.router.navigate(['offer/' + element.ITEM_ID]);
    }
  }
}
