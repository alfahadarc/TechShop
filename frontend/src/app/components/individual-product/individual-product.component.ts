import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.css'],
})
export class IndividualProductComponent implements OnInit {
  productItemAttribute: any;
  numericAttribute: any;
  descriptiveAttribute: any;
  id: any;
  constructor(
    private clientPublicService: ClientPublicService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientPublicService.getSingleProduct(this.id).subscribe({
      next: (success) => {
        this.productItemAttribute = success;
      },
      error: (err) => {},
    });
    this.clientPublicService.getProductComponets(this.id).subscribe({
      next: (success) => {
        this.numericAttribute = success.numericComponents;
        this.descriptiveAttribute = success.descriptiveComponents;
      },
      error: (err) => {},
    });
  }
  goBack() {
    //this.router.navigate(['products/' + this.productItemAttribute.CATEGORY_ID]);
    this.location.back();
  }
}
