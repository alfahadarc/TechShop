import { Component, Input, OnInit } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-offerimage',
  templateUrl: './offerimage.component.html',
  styleUrls: ['./offerimage.component.css'],
})
export class OfferimageComponent implements OnInit {
  @Input() ImageID: any;
  imageToShow: any;
  constructor(private clientpublicservice: ClientPublicService) {}

  ngOnInit(): void {
    this.getImage(this.ImageID);
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
