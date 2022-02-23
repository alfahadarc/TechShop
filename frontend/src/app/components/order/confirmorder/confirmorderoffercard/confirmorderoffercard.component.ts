import { Component, Input, OnInit } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-confirmorderoffercard',
  templateUrl: './confirmorderoffercard.component.html',
  styleUrls: ['./confirmorderoffercard.component.css'],
})
export class ConfirmorderoffercardComponent implements OnInit {
  @Input() offer: any;
  imageToShow: any;
  constructor(private clientpublicservice: ClientPublicService) {}

  ngOnInit(): void {
    this.getImage(this.offer.ITEM_ID);
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
