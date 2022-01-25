import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateViewsComponent } from './template-views.component';

describe('TemplateViewsComponent', () => {
  let component: TemplateViewsComponent;
  let fixture: ComponentFixture<TemplateViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
