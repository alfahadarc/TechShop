import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allordercard',
  templateUrl: './allordercard.component.html',
  styleUrls: ['./allordercard.component.css'],
})
export class AllordercardComponent implements OnInit {
  @Input() order: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  confirmOrder() {
    this.router.navigate(['confirmorder/' + this.order.ORDER_ID]);
  }
}
