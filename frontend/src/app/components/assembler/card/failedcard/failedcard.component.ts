import { Component, Input, OnInit } from '@angular/core';
import { AssemblerService } from 'src/app/services/assembler/assembler.service';

@Component({
  selector: 'app-failedcard',
  templateUrl: './failedcard.component.html',
  styleUrls: ['./failedcard.component.css'],
})
export class FailedcardComponent implements OnInit {
  @Input() item: any;
  alreadyhas = false;
  quantity: any;
  constructor(private assembleservice: AssemblerService) {}

  ngOnInit(): void {
    this.assembleservice.getSingleProductStockReq(this.item.ITEM_ID).subscribe({
      next: (success) => {
        if (success != false) {
          this.alreadyhas = true;
          this.quantity = success.QUANTITY;
        }
      },
    });
  }
}
