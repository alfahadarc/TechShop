import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public category: any;
  constructor(
    private router: Router,
    private clientPublicService: ClientPublicService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.clientPublicService.getAllCategories().subscribe({
      next: (success) => {
        //console.log(success);
        this.category = success.sort();
      },
      error: (err) => {
        //this.notify.showError(err.error.message, 'Error');
      },
    });
  }

  goToCategoryAllProductPage(id: any, name: any) {
    this.router.navigate(['products/' + id]);
  }
}
