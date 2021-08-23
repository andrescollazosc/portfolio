import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormEnum } from 'src/app/enums/contact-form.enum';
import { MessageModel } from 'src/app/models/message.model';
import { PortfolioService } from '../../services/portfolio.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public status: ContactFormEnum = ContactFormEnum.initial;
  public messageModel: MessageModel = {};
  public form: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    message: [''],
  });

  constructor(private formBuilder: FormBuilder, private portfolioService: PortfolioService) {    
    this.createForm();
  }

  ngOnInit(): void {
  }

  get nameNoValidated(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }

  get emailNoValidated(){
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get messageNoValidated(){
    return this.form.get('message')?.invalid && this.form.get('message')?.touched;
  }

  public saveMessage(): void {
    if (this.form.valid) {
      const message: MessageModel = {
        name: this.form.value.name,
        email: this.form.value.email,
        text: this.form.value.message,
        ownerMessage: 'ACC'
      };
      
      this.createMessage(message);
    }    
  }

  private createMessage(message: MessageModel): void {
    this.status = ContactFormEnum.processing;

    debugger
    this.portfolioService.addMessage(message)
    .pipe(finalize(() => {
      if (this.messageModel) {
        this.status = ContactFormEnum.success;        
      } else {
        this.status = ContactFormEnum.error;
      }
    }))
    .subscribe(response => {
      this.messageModel = response;
    }, error => {
      debugger
      this.status = ContactFormEnum.error;
    });
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(200)]],
    });
  }  

  
}
