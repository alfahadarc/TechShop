import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompareService } from 'src/app/services/client/compare.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-comparebox',
  templateUrl: './comparebox.component.html',
  styleUrls: ['./comparebox.component.css'],
})
export class CompareboxComponent implements OnInit {
  constructor(
    private compareservice: CompareService,
    private router: Router,
    private notify: NotificationService
  ) {}

  compareOne: any;
  compareTwo: any;
  showONE = false;
  showTWO = false;
  number: any;
  ngOnInit(): void {
    if (
      window.sessionStorage.getItem('COMPAREONE') &&
      window.sessionStorage.getItem('COMPARETWO')
    ) {
      this.number = 2;
    } else if (
      window.sessionStorage.getItem('COMPAREONE') ||
      window.sessionStorage.getItem('COMPARETWO')
    ) {
      this.number = 1;
    } else {
      this.number = 0;
    }
    this.compareservice.data.subscribe({
      next: (success) => {
        this.number = success;
      },
    });
  }
  getCompareBox() {
    if (window.sessionStorage.getItem('COMPAREONE')) {
      this.showONE = true;
      var val: any;
      val = window.sessionStorage.getItem('COMPAREONE');
      this.compareOne = JSON.parse(val);
    }
    if (window.sessionStorage.getItem('COMPARETWO')) {
      this.showTWO = true;
      var val: any;
      val = window.sessionStorage.getItem('COMPARETWO');
      this.compareTwo = JSON.parse(val);
    }
    if (
      window.sessionStorage.getItem('COMPAREONE') &&
      window.sessionStorage.getItem('COMPARETWO')
    ) {
      this.showONE = true;
      this.showTWO = true;
      var val1: any;
      var val2: any;
      val1 = window.sessionStorage.getItem('COMPAREONE');
      val2 = window.sessionStorage.getItem('COMPARETWO');
      this.compareOne = JSON.parse(val1);
      this.compareTwo = JSON.parse(val2);
    }
  }
  compare() {
    if (
      window.sessionStorage.getItem('COMPAREONE') &&
      window.sessionStorage.getItem('COMPARETWO')
    ) {
      this.router.navigate(['compare']);
    } else {
      this.notify.showWarning('Need two product to compare', 'Can not compare');
    }
  }
  clear() {
    window.sessionStorage.removeItem('COMPAREONE');
    window.sessionStorage.removeItem('COMPARETWO');
    window.sessionStorage.setItem('COMPARE', '0');
    this.number = 0;
    this.showONE = false;
    this.showTWO = false;
  }
}
