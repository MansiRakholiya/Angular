import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgchangeComponent } from './bgchange.component';

describe('BgchangeComponent', () => {
  let component: BgchangeComponent;
  let fixture: ComponentFixture<BgchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
