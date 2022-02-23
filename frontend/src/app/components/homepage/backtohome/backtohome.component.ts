import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backtohome',
  templateUrl: './backtohome.component.html',
  styleUrls: ['./backtohome.component.css'],
})
export class BacktohomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goHomepage() {
    this.router.navigate(['home']);
  }
}
