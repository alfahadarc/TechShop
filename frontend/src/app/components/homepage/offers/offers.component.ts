import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  public offers: any;

  constructor(private clientpublicservice: ClientPublicService) {}
  ngOnInit(): void {
    this.clientpublicservice.getFeaturedOffer().subscribe({
      next: (success) => {
        //console.log(success);
        this.offers = success;
      },
      error: (err) => {},
    });
  }
}
