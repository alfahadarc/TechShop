import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssemblerService } from 'src/app/services/assembler/assembler.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() i: any;
  date: any;
  failed = false;
  refillProducts: any = [];
  constructor(
    private asmblrservice: AssemblerService,
    private notify: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.date = new Date(this.i.ORDER_DATE).toUTCString();
  }
  assemble() {
    console.log(this.i);
    this.asmblrservice.doAssemble(this.i.ORDER_ID).subscribe({
      next: (success) => {
        console.log(success);

        if (success.hasEnough == true) {
          this.notify.showSuccess(success.message, 'Success');
          window.location.reload();
        } else {
          this.failed = true;

          this.refillProducts = success.refillProducts;
        }
      },
      error: (err) => {
        this.notify.showError(err.error.message, 'Error');
      },
    });
  }
  seeThisOrder() {
    this.router.navigate(['assemleitems/' + this.i.ORDER_ID]);
  }
  stockReq(item: any) {
    var product = {
      productID: item.ITEM_ID,
      quantity: item.NEED,
    };
    console.log(product);
    this.asmblrservice.addStockReq(product).subscribe({
      next: (success) => {
        console.log(success);
        this.notify.showSuccess(success.message, 'Success');
      },
      error: (err) => {
        this.notify.showWarning(err.error.message, '');
      },
    });
  }
}
