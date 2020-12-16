import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppresourceDetailComponent } from './appresource-detail.component';

describe('AppresourceDetailComponent', () => {
  let component: AppresourceDetailComponent;
  let fixture: ComponentFixture<AppresourceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppresourceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppresourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
