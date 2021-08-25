import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationComponent } from './contact-information.component';

describe('ContactInformationComponent', () => {
  let component: ContactInformationComponent;
  let fixture: ComponentFixture<ContactInformationComponent>;
  let componentPrivate: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInformationComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationComponent);
    component = fixture.componentInstance;
    componentPrivate = <any> component;
    fixture.detectChanges();
  });

  describe('When ngOnInit is invoked', () => {
    beforeEach(() => {
      spyOn(componentPrivate, 'initializeData');
    });

    it('Should call initializeData', () => {
      component.ngOnInit();

      expect(componentPrivate.initializeData).toHaveBeenCalledWith();
    });
  });
  

});
