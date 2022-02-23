import { Component, OnInit,Input } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-confirm-order-product-card',
  templateUrl: './confirm-order-product-card.component.html',
  styleUrls: ['./confirm-order-product-card.component.css']
})
export class ConfirmOrderProductCardComponent implements OnInit {
  @Input() product: any;
  imageToShow: any;
  constructor(private clientpublicservice: ClientPublicService) { }

  ngOnInit(): void {
    this.getImage(this.product.ITEM_ID);
    
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
