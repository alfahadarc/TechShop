import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-asmblrequest',
  templateUrl: './asmblrequest.component.html',
  styleUrls: ['./asmblrequest.component.css'],
})
export class AsmblrequestComponent implements OnInit {
  quantity = new FormControl('', Validators.required);
  constructor(
    private admindashboardservice: AdmindashboardService,
    private notify: NotificationService
  ) {}
  requestedProduct: any = [];
  ngOnInit(): void {
    this.getRequestProduct();
  }
  getRequestProduct() {
    this.admindashboardservice.getStockReq().subscribe({
      next: (success) => {
        //console.log(success);
        this.requestedProduct = success;
      },
    });
  }
  resolveRequest(i: any) {
    var data = {
      quantity: this.quantity,
    };
    this.admindashboardservice.resolveStockReq(i.PRODUCT_ID, data).subscribe({
      next: (success) => {
        //console.log(success);
        this.notify.showSuccess(success.message, 'Success');
        this.getRequestProduct();
      },
    });
  }
  rejectRequest(i: any) {
    console.log(i);
    this.admindashboardservice.rejectStockReq(i.PRODUCT_ID).subscribe({
      next: (success) => {
        //console.log(success);
        this.notify.showSuccess(success.message, 'Success');
        this.getRequestProduct();
      },
    });
  }
}
