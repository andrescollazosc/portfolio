import { Component, Input, OnInit } from '@angular/core';
import { ProfileCardModel } from 'src/app/models/profile-card.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() profileConfig: ProfileCardModel = {};

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    if (!this.profileConfig.title) {
      this.profileConfig = {
        title: 'Title here',
        description: 'Lorem...'
      };
    }
  }
}
