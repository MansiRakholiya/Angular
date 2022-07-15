import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimedropdownComponent } from './primedropdown.component';

describe('PrimedropdownComponent', () => {
  let component: PrimedropdownComponent;
  let fixture: ComponentFixture<PrimedropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimedropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
