import { Component, OnInit } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-clientalloffers',
  templateUrl: './clientalloffers.component.html',
  styleUrls: ['./clientalloffers.component.css'],
})
export class ClientalloffersComponent implements OnInit {
  constructor(private clientpublicservice: ClientPublicService) {}
  offers: any;
  ngOnInit(): void {
    this.clientpublicservice.getAllOffer().subscribe({
      next: (success) => {
        this.offers = success;
      },
    });
  }
}
