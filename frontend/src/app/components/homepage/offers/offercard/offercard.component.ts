import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-offercard',
  templateUrl: './offercard.component.html',
  styleUrls: ['./offercard.component.css'],
})
export class OffercardComponent implements OnInit {
  @Input() Offer: any;
  imageToShow: any;
  constructor(
    private router: Router,
    private clientpublicservice: ClientPublicService
  ) {}

  ngOnInit(): void {
    //console.log(this.Offer);
    this.getImage(this.Offer.ITEM_ID);
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

  goIndividualOffer() {
    this.router.navigate(['offer/' + this.Offer.ITEM_ID]);
  }
}
