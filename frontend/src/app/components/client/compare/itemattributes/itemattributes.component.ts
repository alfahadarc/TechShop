import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemattributes',
  templateUrl: './itemattributes.component.html',
  styleUrls: ['./itemattributes.component.css'],
})
export class ItemattributesComponent implements OnInit {
  @Input() title: any;
  @Input() val1: any;
  @Input() val2: any;
  constructor() {}

  ngOnInit(): void {}
}
