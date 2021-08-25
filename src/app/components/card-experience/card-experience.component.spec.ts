import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperienceComponent } from './card-experience.component';

describe('CardExperienceComponent', () => {
  let component: CardExperienceComponent;
  let fixture: ComponentFixture<CardExperienceComponent>;
  let componentPrivate: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExperienceComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExperienceComponent);
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
      expect(component.configCard[0].job).toBe('test job');
    });
  });
  


});
