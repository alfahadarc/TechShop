import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numericattributes',
  templateUrl: './numericattributes.component.html',
  styleUrls: ['./numericattributes.component.css'],
})
export class NumericattributesComponent implements OnInit {
  @Input() Numericattribute: any;
  constructor() {}

  ngOnInit(): void {}
}
