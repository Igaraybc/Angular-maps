import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMapComponent } from './ex-map.component';

describe('ExMapComponent', () => {
  let component: ExMapComponent;
  let fixture: ComponentFixture<ExMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
