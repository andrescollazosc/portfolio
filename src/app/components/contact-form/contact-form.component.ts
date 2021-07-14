import { Component, OnInit } from '@angular/core';
import { ContactFormEnum } from 'src/app/enums/contact-form.enum';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public status: ContactFormEnum = ContactFormEnum.initial;

  ngOnInit(): void {
  }

  public sendData():void {
    this.status = ContactFormEnum.processing;

    setTimeout(() => {
      this.status = ContactFormEnum.success;
    }, 2000);
  }

}
