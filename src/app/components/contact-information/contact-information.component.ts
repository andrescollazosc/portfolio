import { Component, Input, OnInit } from '@angular/core';
import { ContactInfoModel } from 'src/app/models/contact-info.model';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  @Input() configContact: ContactInfoModel[] = [];

  ngOnInit(): void {
  }

}
