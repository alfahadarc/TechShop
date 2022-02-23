import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  items: any = [];
  unseenCount: any = 0;
  constructor(
    private clientpublicservice: ClientPublicService,
    private notify: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNotifications();
    this.getCount();
  }
  getNotifications() {
    this.clientpublicservice.getAllNotifications().subscribe({
      next: (success) => {
        this.items = success;
      },
    });
  }

  getCount() {
    this.clientpublicservice.getUnseenNotifications().subscribe({
      next: (success) => {
        this.unseenCount = success.COUNT;
      },
    });
  }

  Show(item: any) {
    console.log(item);
    if (item.TYPE == 'COMMENT') {
      var id: any;
      this.clientpublicservice
        .getIdFromNotification(item.NOTIFICATION_ID)
        .subscribe({
          next: (success) => {
            id = success.PRODUCT_ID;
            this.router.navigate(['product/' + id]);
            this.seenNotification(item);
          },
        });
    } else if (item.TYPE == 'ORDER') {
      this.seenNotification(item);
      this.router.navigate(['allorders']);
    }
  }
  seenNotification(item: any) {
    this.clientpublicservice
      .setSeenNotification(item.NOTIFICATION_ID)
      .subscribe({
        next: (success) => {
          //console.log(success);
          this.getNotifications();
          this.getCount();
        },
      });
  }
  delete(item: any) {
    this.clientpublicservice
      .deleteNotification(item.NOTIFICATION_ID)
      .subscribe({
        next: (success) => {
          this.notify.showSuccess(success.message, 'Success');
          this.getNotifications();
          this.getCount();
        },
      });
  }
}
