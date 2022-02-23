import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  offer: any = [];
  product: any = [];
  displayedColumns: string[] = ['TITLE', 'actions'];
  public dataSource_one = new MatTableDataSource<any>([]);
  public dataSource_two = new MatTableDataSource<any>([]);
  constructor(
    private clientpublicservice: ClientPublicService,
    private router: Router,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.clientpublicservice.getFullWishList().subscribe({
      next: (success) => {
        //console.log(success);
        this.product = success.filter((elm: any) => {
          if (elm.TYPE === 'PRODUCT') return true;
          else return false;
        });
        this.offer = success.filter((elm: any) => {
          if (elm.TYPE === 'OFFER') return true;
          else return false;
        });
        if (this.product !== null) {
          this.dataSource_one.data = this.product;
        }
        if (this.offer !== null) {
          this.dataSource_two.data = this.offer;
        }
      },
    });
  }
  individualProduct(id: any) {
    this.router.navigate(['product/' + id]);
  }

  individualOffer(id: any) {
    this.router.navigate(['offer/' + id]);
  }
  onDelete(id: any) {
    this.clientpublicservice.deleteItemFromWishList(id).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
      },
    });
    window.location.reload();
  }
}
