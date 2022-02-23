import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { CompareService } from 'src/app/services/client/compare.service';

@Component({
  selector: 'app-category-product-card',
  templateUrl: './category-product-card.component.html',
  styleUrls: ['./category-product-card.component.css'],
})
export class CategoryProductCardComponent implements OnInit {
  @Input() item: any;
  imageToShow: any;
  constructor(
    private router: Router,
    private clientPublicService: ClientPublicService,
    private compareservice: CompareService
  ) {}

  ngOnInit(): void {
    //console.log(this.item);
    this.getImage(this.item.ITEM_ID);
    //for campare
  }
  //get image from backend
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
  //add to compare
  addToCompare(ID: any) {
    let val = window.sessionStorage.getItem('COMPARE');

    let obj = { id: ID, title: this.item.TITLE };
    let obj_serialized = JSON.stringify(obj);
    if (val === '0') {
      window.sessionStorage.setItem('COMPAREONE', obj_serialized);
      window.sessionStorage.removeItem('COMPARE');
      window.sessionStorage.setItem('COMPARE', '1');
    } else if (val === '1') {
      window.sessionStorage.setItem('COMPARETWO', obj_serialized);
      window.sessionStorage.removeItem('COMPARE');
      window.sessionStorage.setItem('COMPARE', '2');
    } else if (val === '2') {
      window.sessionStorage.setItem('COMPAREONE', obj_serialized);
      window.sessionStorage.removeItem('COMPARE');
      window.sessionStorage.setItem('COMPARE', '1');
    }
    var total = 0;
    if (
      window.sessionStorage.getItem('COMPAREONE') &&
      window.sessionStorage.getItem('COMPARETWO')
    ) {
      total = 2;
    } else if (
      window.sessionStorage.getItem('COMPAREONE') ||
      window.sessionStorage.getItem('COMPARETWO')
    ) {
      total = 1;
    } else {
      total = 0;
    }

    this.compareservice.sendData(total);
  }

  //go to individual page
  goIndividualProduct() {
    this.router.navigate(['product', this.item.ITEM_ID]);
  }
}
