import { Component, OnInit } from '@angular/core';
import { ProfileCardMock } from 'src/app/mocks/profile-card.mock';
import { SkillCardMock } from 'src/app/mocks/skill.card.mock';
import { ProfileCardModel } from 'src/app/models/profile-card.model';
import { SkillCardModel } from 'src/app/models/skill-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public skillCardConfig: SkillCardModel[] = SkillCardMock.getConfigurationCard();
  public profileConfig: ProfileCardModel = ProfileCardMock.getProfile();

  ngOnInit(): void {
  }

}
