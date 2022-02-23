import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backtoadmindashboard',
  templateUrl: './backtoadmindashboard.component.html',
  styleUrls: ['./backtoadmindashboard.component.css'],
})
export class BacktoadmindashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goDashboard() {
    this.router.navigate(['admindashboard']);
  }
}
