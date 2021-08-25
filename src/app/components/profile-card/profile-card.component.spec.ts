import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCardComponent } from './profile-card.component';

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;
  let componentPrivate: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileCardComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    componentPrivate = <any>component;
    fixture.detectChanges();
  });

  describe('When ngOnInit is invoked', () => {
    beforeEach(() => {
      spyOn(componentPrivate, 'initializeData');
    });

    it('Should call initializeData', () => {
      component.ngOnInit();

      expect(componentPrivate.initializeData).toHaveBeenCalledWith();
      expect(component.profileConfig.title).toBe('Title here');
    });
  });
});
