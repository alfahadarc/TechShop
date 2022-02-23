import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { OrderService } from 'src/app/services/client/order.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-orderconfirmcard',
  templateUrl: './orderconfirmcard.component.html',
  styleUrls: ['./orderconfirmcard.component.css'],
})
export class OrderconfirmcardComponent implements OnInit {
  @Input() orderPrice: any;
  @Input() allOrder: any;
  shipingcost = 0;
  shippingArea: any;
  orderForm: any;

  district: any = [];
  districtId: any;
  subdistrict: any = [];

  everyThingOk = false;
  constructor(
    private fb: FormBuilder,
    private orderservice: OrderService,
    private notify: NotificationService,
    private route: Router,
    private clientpublicservice: ClientPublicService
  ) {
    this.orderForm = this.fb.group({
      destinationAddress: ['', Validators.required],
      district: [''],
      destinationSubDistrict: ['', Validators.required],
      orderItems: this.fb.array([
        //this.newOrder()
      ]),
    });
  }

  ngOnInit(): void {
    this.clientpublicservice.getProfile().subscribe({
      next: (success) => {
        this.orderForm.controls['destinationAddress'].setValue(
          success.ADDRESS_DESCRIPTION
        );
      },
    });
    this.orderservice.getAllDistrict().subscribe({
      next: (success) => {
        this.district = success;
        //console.log(this.district);
      },
    });

    this.orderForm.get('district').valueChanges.subscribe((x: any) => {
      //console.log(x);
      this.orderservice.getAllSubDistrict(x).subscribe({
        next: (success) => {
          this.subdistrict = success;
          //console.log(this.subdistrict);
          this.shippingArea = this.district.filter((val: any) => {
            if (val.DISTRICT_ID === x) return true;
            else return false;
          });

          this.shipingcost = this.shippingArea[0].DELIVERY_COST;
          //console.log(this.shipingcost);
        },
      });
    });
  }

  get orderItems(): FormArray {
    return this.orderForm.controls.orderItems as FormArray;
  }

  newOrder(): FormGroup {
    return this.fb.group({
      itemID: [''],
      quantity: [''],
    });
  }

  submit() {
    //console.log(this.orderForm.value);
    if (this.orderForm.valid) {
      this.setValue(this.allOrder);
      console.log(this.orderForm.value);
      this.orderservice.addOrder(this.orderForm.value).subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'Success'); //get id form backend
          this.route.navigate(['confirmorder/' + success.ORDER_ID]);
        },
        error: (err) => {
          this.notify.showWarning(err.error.message, '');
          window.location.reload();
        },
      });
    }
  }

  setValue(val: any) {
    //console.log(val);
    let control = <FormArray>this.orderForm.controls.orderItems;
    for (var i = 0; i < val.length; i++) {
      control.push(
        this.fb.group({
          itemID: val[i].itemID,
          quantity: val[i].quantity,
        })
      );
    }
  }
}
