import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/client/order.service';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-deliverycard',
  templateUrl: './deliverycard.component.html',
  styleUrls: ['./deliverycard.component.css'],
})
export class DeliverycardComponent implements OnInit {
  @Input() order: any;
  currentSubDistrict = new FormControl('', Validators.required);
  districts: any;
  subDisticts: any;
  deliveryForm: any;
  constructor(private fb: FormBuilder, private orderservice: OrderService,
    private deliveryService:DeliveryService,
    private notifyService:NotificationService) {
    this.deliveryForm = this.fb.group({
      district: ['', Validators.required],
      subDistrict: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.orderservice.getAllDistrict().subscribe({
      next: (success) => {
        this.districts = success;
        //console.log(this.district);
      },
    });
    this.deliveryForm.get('district').valueChanges.subscribe((x: any) => {
      console.log(x);
      this.orderservice.getAllSubDistrict(x).subscribe({
        next: (success) => {
          this.subDisticts = success;
        },
      });
    });
    console.log(this.order);
    
    this.populateForm();
  }

  populateForm(){
   console.log('populate foEM HERE');
  //  console.log(this.order.CURRENT_SUB_DISTRICT);
   
    if(this.order.CURRENT_SUB_DISTRICT!=null){
      // console.log(this.order.CURRENT_SUB_DISTRICT);
      
      this.deliveryService.getSubDistrict(this.order.CURRENT_SUB_DISTRICT).subscribe(
        {
          next:(success)=>{
            // console.log('success:');
            // console.log(success);
            
            
            this.deliveryForm.get('district').setValue(success.DISTRICT_ID);
            this.deliveryForm.get('subDistrict').setValue(success.SUB_DISTRICT_ID);
           // this.deliveryForm.controls.subDistrict.setValue(success.SUB_DISTRICT_ID);
          },
          error:(err)=>{
            console.log(err);
            
          }
        }
      );
      
    }
  }
  takeDelivery() {
    this.deliveryService.takeDelivery(this.order.ORDER_ID).subscribe(
      {
        next:(success:any)=>{
          console.log(success);
          this.order.ORDER_STATUS='ON_DELIVERY';
          this.notifyService.showSuccess(success.message,'Success');
          // window.location.reload();
        },
        error:(error)=>{
          console.log(error);
          this.notifyService.showError(error.error.message,'Error');
        }
      }
    );
  }

  changeCurrentSubDistrict(){
    if(this.deliveryForm.get('district').status==='VALID' && 
    this.deliveryForm.get('subDistrict').status==='VALID'){
        let body={
          orderID:this.order.ORDER_ID,
          subDistrictID:this.deliveryForm.get('subDistrict').value
        };
        this.deliveryService.changeCurrentSubDistrict(body).subscribe(
          {
              next:(data:any)=>{
                console.log(data);
                this.notifyService.showSuccess(data.message,'Success');
              },
              error:(error:any)=>{
                console.log(error);
                this.notifyService.showError(error.error.message,'Error');
                
              }
          }
        );
    }
    else{
      this.notifyService.showWarning('Select District and Subdistrict first','Halt!');
    }
    
  }

  markAsDelivered() {
    console.log('marking as delivered');
    this.deliveryService.markAsDelivered(this.order.ORDER_ID).subscribe(
      {
        next:(success:any)=>{
          console.log(success);
          this.notifyService.showSuccess(success.message,'Success');
          this.order.ORDER_STATUS='DELIVERED';
        },
        error:(error:any)=>{
          console.log(error);
          this.notifyService.showError(error.error.message,'Error');
        }
      }
    );
  }
}
