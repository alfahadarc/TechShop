import { Component, Input, OnInit } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css'],
})
export class SinglecardComponent implements OnInit {
  @Input() data: any;
  value: any;
  constructor(
    private clientpublicservice: ClientPublicService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.value = (this.data.ACQUIRED_STEPS / this.data.TOTAL_STEPS) * 100;
  }
  claim() {
    this.clientpublicservice.claimAchivment(this.data.TITLE).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'success');
        window.location.reload();
      },
    });
  }
}
