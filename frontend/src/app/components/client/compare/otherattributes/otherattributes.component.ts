import { Component, Input, OnInit } from '@angular/core';
import { CompareService } from 'src/app/services/client/compare.service';

@Component({
  selector: 'app-otherattributes',
  templateUrl: './otherattributes.component.html',
  styleUrls: ['./otherattributes.component.css'],
})
export class OtherattributesComponent implements OnInit {
  constructor(private compareService: CompareService) {}

  @Input() Attribute: any;
  toggle = false;
  difference = false;
  show = false;
  ngOnInit(): void {
    this.compareService.toggle.subscribe({
      next: (success) => {
        this.toggle = success;
        if (this.Attribute.value1 !== this.Attribute.value2) {
          this.difference = true;
        }
        if (this.toggle === true && this.difference === true) {
          this.show = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
