import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  @Input() productID: any;
  reviewForm: any;
  isLoggedIn = false;
  userName: any;
  max = 5;
  isReadonly = false;
  reviews: any;
  constructor(
    private clientpublicservice: ClientPublicService,
    private fb: FormBuilder,
    private notify: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      productID: this.productID,
      description: ['', Validators.required],
      title: [''],
      rating: [0],
    });
    this.clientpublicservice.isLoggedin().subscribe({
      next: (success) => {
        this.isLoggedIn = true;
        this.userName = success.USER_NAME;
      },
      error: (err) => {
        this.isLoggedIn = false;
      },
    });
    this.getReview();
  }
  getReview() {
    this.clientpublicservice.getReviews(this.productID).subscribe({
      next: (success) => {
        this.reviews = success;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  submit() {
    //console.log(this.reviewForm.value);
    this.clientpublicservice.addReview(this.reviewForm.value).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
        this.getReview();
      },
      error: (err) => {
        this.notify.showError('Can not review', 'Error');
      },
    });
  }

  clearRatring() {
    this.reviewForm.controls['rating'].setValue(0);
  }
  deleteComment(node: any) {
    this.clientpublicservice.deleteReview(node.PRODUCT_ID).subscribe({
      next: (success) => {
        this.notify.showSuccess(success.message, 'Success');
        this.getReview();
      },
    });
  }

  goLogin() {
    this.router.navigate(['auth']);
  }
}
