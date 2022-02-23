import { Component, Input, OnInit } from '@angular/core';
import { getTutorialVideoUrl } from 'src/app/config/api';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-orderproductcard',
  templateUrl: './orderproductcard.component.html',
  styleUrls: ['./orderproductcard.component.css'],
})
export class OrderproductcardComponent implements OnInit {
  @Input() item: any;
  product: any;

  totalPrice = 0;
  imageToShow: any;
  constructor(private clientpublicservice: ClientPublicService) {}

  ngOnInit(): void {
    //console.log(this.item);
    this.getImage(this.item.ITEM_ID);

    this.clientpublicservice.getSingleProduct(this.item.ITEM_ID).subscribe({
      next: (success) => {
        this.product = success;
        //console.log(this.product);
        this.getTotal(this.item.QUANTITY, this.product.DISCOUNTED_PRICE);
      },
    });
  }
  getTotal(qnt: any, price: any) {
    this.totalPrice = qnt * price;
    //console.log(this.totalPrice);
  }
  getImage(id: any) {
    this.clientpublicservice.getPhoto(id).subscribe({
      next: (success) => {
        this.createImageFromBlob(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
