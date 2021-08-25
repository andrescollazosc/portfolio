import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuComponent } from './mobile-menu.component';

describe('MobileMenuComponent', () => {
  let component: MobileMenuComponent;
  let fixture: ComponentFixture<MobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When showMenu is invoked', () => {
    it('Should isShow be different from itself.', () => {
      const isShow = component.isShow;
      component.showMenu();

      expect(component.isShow).toBe(!isShow);
    });

    it('When isShow is false iconClass must be will get [fas fa-bars] css class', () => {
      component.isShow = true;
      component.showMenu();

      expect(component.iconClass).toBe('fas fa-bars');
    });

    it('When isShow is true iconClass must be will get [fas fa-times] css class', () => {
      component.isShow = true;
      component.showMenu();

      expect(component.iconClass).toBe('fas fa-bars');
    });
  });
  
});
