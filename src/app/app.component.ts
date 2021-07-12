import { Component } from '@angular/core';
import { SkillCardModel } from './models/skill-card.model';
import { SkillCardMock } from './mocks/skill.card.mock';
import { ProfileCardModel } from './models/profile-card.model';
import { ProfileCardMock } from './mocks/profile-card.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-services-briefcase';

  public skillCardConfig: SkillCardModel[] = SkillCardMock.getConfigurationCard();
  public profileConfig: ProfileCardModel = ProfileCardMock.getProfile();

}
