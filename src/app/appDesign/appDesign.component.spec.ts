import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDesignComponent } from './appDesign.component';

describe('AppComponent', () => {
  let component: AppDesignComponent;
  let fixture: ComponentFixture<AppDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDesignComponent],
    });
    fixture = TestBed.createComponent(AppDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
