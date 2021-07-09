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
    if (!this.configCard) {
      throw new Error("The property [configCard] is required.");      
    }
  }

}
