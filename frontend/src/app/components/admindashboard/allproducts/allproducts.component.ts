import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { EditserviceService } from 'src/app/services/admin/editservice.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {
  ELEMENT_DATA = [];
  //table source
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    'ITEM_ID',
    'TITLE',
    'MANUFACTURER_NAME',
    'actions',
  ];

  //paginator
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  isLoading = true;

  constructor(
    private router: Router,
    private admindashboardservice: AdmindashboardService,
    private editservice: EditserviceService
  ) {}

  ngOnInit(): void {
    //this.dataSource.data = this.ELEMENT_DATA; //from backend
    this.admindashboardservice.getAllProducts().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.dataSource.paginator = this.paginator;
  }
  onEdit(row: any) {
    this.editservice.setProduct(row);
    this.router.navigate(['editproduct/' + row.ITEM_ID]);
  }

  //table pagination
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  goAddProduct() {
    this.router.navigate(['addproduct']);
  }
}
