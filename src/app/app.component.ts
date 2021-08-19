import { Component, OnInit } from '@angular/core';
import { MenuModel } from './models/menu.model';
import { MenuMock } from './mocks/menu.mock';
import { SkillCardModel } from './models/skill-card.model';
import { ProfileCardModel } from './models/profile-card.model';
import { ProfileCardMock } from './mocks/profile-card.mock';
import { SkillCardMock } from './mocks/skill.card.mock';
import { CardExperienceModel } from './models/card-experience.model';
import { CardExperienceMock } from './mocks/card-experience.mock';
import { ContactInfoModel } from './models/contact-info.model';
import { ContactInfoMock } from './mocks/contact-info.mock';
import { IpService } from './services/ip.service';
import { finalize } from 'rxjs/operators';
import { VisitModel } from './models/visit.model';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public menuConfig: MenuModel[] = MenuMock.getDataMenu();
  public skillCardConfig: SkillCardModel[] =
    SkillCardMock.getConfigurationCard();
  public profileConfig: ProfileCardModel = ProfileCardMock.getProfile();
  public experienceConfig: CardExperienceModel[] =
    CardExperienceMock.getExperienceData();
  public configContact: ContactInfoModel[] = ContactInfoMock.getContactInfo();

  private ipModel: VisitModel = {};
  private visit: VisitModel = {};
  private isSaved: boolean = false;

  constructor(private ipService: IpService, private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getIp();
  }

  private getIp(): void {
    this.ipService.getIPAddress()
    .pipe(finalize(() => {
      this.createVisit(this.ipModel);
    }))
    .subscribe(result => {
      this.ipModel = result;
    });    
  }

  private createVisit(visit: VisitModel): void {
    visit.ownerMessage = 'ACC';

    this.portfolioService.addVisit(visit)
    .pipe(finalize(() => {
      if (this.visit) {
        this.isSaved = true;       
      }
    })).subscribe(response => {
      this.visit = response;
    }, error => {
      console.error(error);
    });
  }
}
