import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdmindashboardService } from 'src/app/services/admin/admindashboard.service';

@Component({
  selector: 'app-deliveryman',
  templateUrl: './deliveryman.component.html',
  styleUrls: ['./deliveryman.component.css'],
})
export class DeliverymanComponent implements OnInit {
  //demo data
  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['USERNAME', 'EMAIL', 'FIRST_NAME', 'USER_ROLE'];

  //paginator
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  isLoading = true;
  constructor(
    private router: Router,
    private admindashboardservice: AdmindashboardService
  ) {}

  ngOnInit(): void {
    //get all delivery man
    this.admindashboardservice.getEmployee().subscribe({
      next: (success) => {
        this.isLoading = false;
        console.log(success);
        this.dataSource.data = success;
      },
    });
  }

  addnewPerson() {
    this.router.navigate(['addperson']);
  }
}
