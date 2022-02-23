import { Component, Input, OnInit } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-orderoffercard',
  templateUrl: './orderoffercard.component.html',
  styleUrls: ['./orderoffercard.component.css'],
})
export class OrderoffercardComponent implements OnInit {
  @Input() item: any;
  offer: any;

  totalPrice = 0;
  imageToShow: any;
  constructor(private clientpublicservice: ClientPublicService) {}

  ngOnInit(): void {
    this.getImage(this.item.ITEM_ID);
    this.clientpublicservice.getSingleOffer(this.item.ITEM_ID).subscribe({
      next: (success) => {
        this.offer = success;
        console.log(this.offer);
      },
    });
  }

  getImage(id: any) {
    this.clientpublicservice.getOfferMainImage(id).subscribe({
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
