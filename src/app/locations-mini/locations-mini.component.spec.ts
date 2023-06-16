import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsMiniComponent } from './locations-mini.component';

describe('LocationsMiniComponent', () => {
  let component: LocationsMiniComponent;
  let fixture: ComponentFixture<LocationsMiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsMiniComponent]
    });
    fixture = TestBed.createComponent(LocationsMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
