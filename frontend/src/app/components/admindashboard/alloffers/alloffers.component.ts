import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';
import { EditserviceService } from 'src/app/services/admin/editservice.service';

@Component({
  selector: 'app-alloffers',
  templateUrl: './alloffers.component.html',
  styleUrls: ['./alloffers.component.css'],
})
export class AlloffersComponent implements OnInit {
  //table source
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['ITEM_ID', 'TITLE', 'actions'];
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
    //database call to get data
    this.admindashboardservice.getAllOffer().subscribe({
      next: (success) => {
        this.dataSource.data = success;
        this.isLoading = false;
      },
    });

    this.dataSource.paginator = this.paginator;
  }

  onEdit(row: any) {
    this.router.navigate(['editOffer/' + row.ITEM_ID]);
  }
  goAddOffer() {
    this.router.navigate(['addOffer']);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
