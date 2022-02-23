import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AssemblerService } from 'src/app/services/assembler/assembler.service';

@Component({
  selector: 'app-single-productassembler',
  templateUrl: './single-productassembler.component.html',
  styleUrls: ['./single-productassembler.component.css'],
})
export class SingleProductassemblerComponent implements OnInit {
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['ITEM_ID', 'TITLE', 'TYPE', 'QUANTITY'];
  constructor(
    private assembleservice: AssemblerService,
    private route: ActivatedRoute
  ) {}

  items: any;
  orderID: any;
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (success) => {
        this.orderID = success['id'];
        this.assembleservice.getOrderItems(this.orderID).subscribe({
          next: (success) => {
            this.dataSource = success;
          },
        });
      },
    });
  }
}
