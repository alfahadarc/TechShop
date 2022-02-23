import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
})
export class SearchpageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private clientpublicservice: ClientPublicService
  ) {}

  products: any;
  offers: any;
  found: boolean = false;
  foundProduct: boolean = false;
  foundOffer: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (success) => {
        this.clientpublicservice.serch(success['key']).subscribe({
          next: (success) => {
            if (success.length !== 0) {
              this.found = true;
            }
            this.products = success.filter((item: any) => {
              if (item.TYPE === 'PRODUCT') return true;
              else return false;
            });
            this.offers = success.filter((item: any) => {
              if (item.TYPE === 'OFFER') return true;
              else return false;
            });

            if (this.products.length !== 0) {
              this.foundProduct = true;
            }
            if (this.offers.length !== 0) {
              this.foundOffer = true;
            }
          },
        });
      },
    });
  }
}
