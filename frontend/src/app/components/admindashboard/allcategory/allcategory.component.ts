import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { EditserviceService } from 'src/app/services/admin/editservice.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css'],
})
export class AllcategoryComponent implements OnInit {
  //table source
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    'CATEGORY_ID',
    'CATEGORY_NAME',
    'DESCRIPTION',
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
    this.admindashboardservice.getAllCategory().subscribe({
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
    this.editservice.setCategory(row);
    this.router.navigate(['editcategory']);
  }
  goAddCategory() {
    this.router.navigate(['addcategory']);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
