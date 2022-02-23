import { Component, OnInit } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-feturedproduct',
  templateUrl: './feturedproduct.component.html',
  styleUrls: ['./feturedproduct.component.css'],
})
export class FeturedproductComponent implements OnInit {
  public products: any;
  constructor(private clientPublicService: ClientPublicService) {}

  ngOnInit(): void {
    this.clientPublicService.getFeaturedProduct().subscribe({
      next: (success) => {
        this.products = success;
      },
      error: (err) => {},
    });
  }
}
