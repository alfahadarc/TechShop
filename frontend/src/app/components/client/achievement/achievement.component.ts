import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css'],
})
export class AchievementComponent implements OnInit {
  Items: any;

  constructor(private clientpublicservice: ClientPublicService) {}

  ngOnInit(): void {
    this.clientpublicservice.getAllAchivement().subscribe({
      next: (success) => {
        this.Items = success;
        //console.log(success);
      },
    });
  }
}
