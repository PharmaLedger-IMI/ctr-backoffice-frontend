import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppresourceComponent } from './appresource.component';

describe('AppresourceComponent', () => {
  let component: AppresourceComponent;
  let fixture: ComponentFixture<AppresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
