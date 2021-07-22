import { Component, Input, OnInit } from '@angular/core';
import { CardExperienceModel } from 'src/app/models/card-experience.model';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss']
})
export class CardExperienceComponent implements OnInit {

  @Input() configCard: CardExperienceModel[] = [];

  ngOnInit(): void {
    if (this.configCard.length == 0) {
      throw new Error("The property [configCard] is required.");
    }
  }

}
