import { Component, Input, OnInit } from '@angular/core';
import { SkillCardModel } from 'src/app/models/skill-card.model';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() configCard: SkillCardModel={};

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    if (!this.configCard.icon) {
      this.configCard = {
        icon: 'fa-window-maximize far',
      };
    }
  }

}
