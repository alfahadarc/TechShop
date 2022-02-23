import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentandreview',
  templateUrl: './commentandreview.component.html',
  styleUrls: ['./commentandreview.component.css'],
})
export class CommentandreviewComponent implements OnInit {
  @Input() productID: any;
  constructor() {}

  ngOnInit(): void {}
}
