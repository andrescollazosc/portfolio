import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCardComponent } from './skill-card.component';

describe('SkillCardComponent', () => {
  let component: SkillCardComponent;
  let componentPrivate: any;
  let fixture: ComponentFixture<SkillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCardComponent);
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
      expect(component.configCard.icon).toBe('fa-window-maximize far');
    });
  });
  
  
});
