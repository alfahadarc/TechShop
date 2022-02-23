import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditserviceService } from 'src/app/services/admin/editservice.service';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-individual-offer',
  templateUrl: './individual-offer.component.html',
  styleUrls: ['./individual-offer.component.css'],
})
export class IndividualOfferComponent implements OnInit {
  offerID: any;
  offer: any;
  products: any;
  freeproducts: any;
  constructor(
    private route: ActivatedRoute,
    private clientpublicservice: ClientPublicService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (success) => {
        //console.log(success['id']);
        this.offerID = success['id'];
        //call for offer
        this.clientpublicservice.getSingleOffer(this.offerID).subscribe({
          next: (success) => {
            // console.log(success);
            this.offer = success;
          },
        });

        this.clientpublicservice.getIncludesProduct(this.offerID).subscribe({
          next: (success) => {
            console.log(success);
            this.products = success.products;
            this.freeproducts = success.freeProducts;
          },
        });
      },
    });
  }
}
