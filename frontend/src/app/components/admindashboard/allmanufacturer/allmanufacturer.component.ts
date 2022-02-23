import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { EditserviceService } from 'src/app/services/admin/editservice.service';

@Component({
  selector: 'app-allmanufacturer',
  templateUrl: './allmanufacturer.component.html',
  styleUrls: ['./allmanufacturer.component.css'],
})
export class AllmanufacturerComponent implements OnInit {
  //table source
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    'MANUFACTURER_ID',
    'MANUFACTURER_NAME',
    'DESCRIPTION',
    'MOTTO',
    'actions',
  ];
  isLoading = true;

  //paginator
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private router: Router,
    private admindashboardservice: AdmindashboardService,
    private editservice: EditserviceService
  ) {}

  ngOnInit(): void {
    this.admindashboardservice.getAllMAnufacturer().subscribe({
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
    this.editservice.setManufacturer(row);
    this.router.navigate(['editmanufacturer']);
  }
  goAddManufacture() {
    this.router.navigate(['addmanufacture']);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
