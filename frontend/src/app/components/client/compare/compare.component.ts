import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { CompareService } from 'src/app/services/client/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  IDOne: any;
  IDTwo: any;
  product_1_item: any;
  product_2_item: any;
  product_1_components: any;
  product_2_components: any;
  combinedNumeric: any = [];
  combinedDescriptive: any = [];
  isChecked = false;
  imgOne: any;
  imgTwo: any;

  constructor(
    private compareservice: CompareService,
    private router: Router,
    private clientPublicService: ClientPublicService
  ) {}

  ngOnInit(): void {
    //get from session
    this.IDOne = window.sessionStorage.getItem('COMPAREONE');
    this.IDTwo = window.sessionStorage.getItem('COMPARETWO');

    this.getImageOne(JSON.parse(this.IDOne).id);
    this.getImageTwo(JSON.parse(this.IDTwo).id);
    //get from backend
    //get single 1
    this.compareservice.getSingleProduct(JSON.parse(this.IDOne).id).subscribe({
      next: (success) => {
        this.product_1_item = success;
      },
      error: (err) => {
        console.log(err);
      },
    });
    //get single 2
    this.compareservice.getSingleProduct(JSON.parse(this.IDTwo).id).subscribe({
      next: (success) => {
        this.product_2_item = success;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.compareservice
      .getProductComponets(JSON.parse(this.IDOne).id)
      .subscribe({
        next: (success) => {
          this.product_1_components = success;
          this.compareservice
            .getProductComponets(JSON.parse(this.IDTwo).id)
            .subscribe({
              next: (success) => {
                this.product_2_components = success;
                this.convertNumeric(
                  this.product_1_components.numericComponents,
                  this.product_2_components.numericComponents
                );
                this.convertDescriptive(
                  this.product_1_components.descriptiveComponents,
                  this.product_2_components.descriptiveComponents
                );
              },
              error: (err) => {
                console.log(err);
              },
            });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  toggle() {
    this.compareservice.sendToggle(!this.isChecked);
  }
  goBack() {
    this.router.navigate(['products/' + this.product_1_item.CATEGORY_ID]);
  }

  convertNumeric(data1: any, data2: any) {
    for (let i = 0; i < data1.length; i++) {
      var attr1 = data1[i];
      var attr2 = data2.find((val: any) => {
        if (val.TITLE === attr1.TITLE) return true;
        return false;
      });

      if (attr2 === undefined) {
        this.combinedNumeric.push({
          title: attr1.TITLE,
          value1: attr1.VALUE,
          value2: undefined,
          unit: attr1.UNIT,
        });
      } else {
        this.combinedNumeric.push({
          title: attr1.TITLE,
          value1: attr1.VALUE,
          value2: attr2.VALUE,
          unit: attr1.UNIT,
        });
      }
    }

    for (let i = 0; i < data2.length; i++) {
      var attr2 = data2[i];
      var alreadyHas = this.combinedNumeric.some((value: any) => {
        if (value.title === attr2.TITLE) {
          return true;
        }
        return false;
      });
      if (alreadyHas) continue;
      this.combinedNumeric.push({
        title: attr2.TITLE,
        value1: undefined,
        value2: attr2.VALUE,
        unit: attr2.UNIT,
      });
    }
  }

  convertDescriptive(data1: any, data2: any) {
    for (let i = 0; i < data1.length; i++) {
      var attr1 = data1[i];
      var attr2 = data2.find((val: any) => {
        if (val.TITLE === attr1.TITLE) return true;
        return false;
      });

      if (attr2 === undefined) {
        this.combinedDescriptive.push({
          title: attr1.TITLE,
          value1: attr1.SPECIFICATION,
          value2: undefined,
        });
      } else {
        this.combinedDescriptive.push({
          title: attr1.TITLE,
          value1: attr1.SPECIFICATION,
          value2: attr2.SPECIFICATION,
        });
      }
    }

    for (let i = 0; i < data2.length; i++) {
      var attr2 = data2[i];
      var alreadyHas = this.combinedDescriptive.some((value: any) => {
        if (value.title === attr2.TITLE) {
          return true;
        }
        return false;
      });
      if (alreadyHas) continue;
      this.combinedDescriptive.push({
        title: attr2.TITLE,
        value1: undefined,
        value2: attr2.SPECIFICATION,
      });
    }
    // console.log(this.combinedDescriptive);
  }
  getImageOne(id: any) {
    this.clientPublicService.getPhoto(id).subscribe({
      next: (success) => {
        this.createImageFromBlobOne(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  createImageFromBlobOne(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imgOne = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  getImageTwo(id: any) {
    this.clientPublicService.getPhoto(id).subscribe({
      next: (success) => {
        this.createImageFromBlobTwo(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  createImageFromBlobTwo(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imgTwo = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
