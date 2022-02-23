import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genericattributes',
  templateUrl: './genericattributes.component.html',
  styleUrls: ['./genericattributes.component.css'],
})
export class GenericattributesComponent implements OnInit {
  @Input() Descriptive: any;
  constructor() {}

  ngOnInit(): void {}
}
