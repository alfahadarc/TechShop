import { Component, Input, OnInit } from '@angular/core';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-tutorialvideo',
  templateUrl: './tutorialvideo.component.html',
  styleUrls: ['./tutorialvideo.component.css'],
})
export class TutorialvideoComponent implements OnInit {
  @Input() productID: any;
  url: any;
  format: any;
  constructor(private clientpublicservice: ClientPublicService) {}

  ngOnInit(): void {
    this.getVideo(this.productID);
  }

  //vide section
  getVideo(id: any) {
    this.clientpublicservice.getTutorialVideoClient(id).subscribe({
      next: (success) => {
        this.createVideo(success);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  createVideo(video: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.url = reader.result;
        this.format = 'video';
      },
      false
    );

    if (video) {
      reader.readAsDataURL(video);
    }
  }
}
