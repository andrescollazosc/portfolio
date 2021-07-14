import { Component } from '@angular/core';
import { MenuModel } from './models/menu.model';
import { MenuMock } from './mocks/menu.mock';
import { SkillCardModel } from './models/skill-card.model';
import { ProfileCardModel } from './models/profile-card.model';
import { ProfileCardMock } from './mocks/profile-card.mock';
import { SkillCardMock } from './mocks/skill.card.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-services-briefcase';

  public menuConfig: MenuModel[] = MenuMock.getDataMenu();
  public skillCardConfig: SkillCardModel[] = SkillCardMock.getConfigurationCard();
  public profileConfig: ProfileCardModel = ProfileCardMock.getProfile();
}
