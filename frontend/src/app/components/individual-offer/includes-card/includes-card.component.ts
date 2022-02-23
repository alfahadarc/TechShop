import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-includes-card',
  templateUrl: './includes-card.component.html',
  styleUrls: ['./includes-card.component.css'],
})
export class IncludesCardComponent implements OnInit {
  @Input() Offer: any;
  imageToShow: any;
  constructor(
    private router: Router,
    private clientPublicService: ClientPublicService
  ) {}

  ngOnInit(): void {
    this.getImage(this.Offer.PRODUCT_ID);
  }

  getImage(id: any) {
    this.clientPublicService.getPhoto(id).subscribe({
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

  goIndividualPage() {
    this.router.navigate(['product/' + this.Offer.PRODUCT_ID]);
  }
}
