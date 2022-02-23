import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-feturedproductcard',
  templateUrl: './feturedproductcard.component.html',
  styleUrls: ['./feturedproductcard.component.css'],
})
export class FeturedproductcardComponent implements OnInit {
  @Input() Product: any;
  imageToShow: any;
  constructor(
    private clientPublicService: ClientPublicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //console.log(this.Product);
    this.getImage(this.Product.ITEM_ID);
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
  goIndividualProduct() {
    this.router.navigate(['product', this.Product.ITEM_ID]);
  }
}
