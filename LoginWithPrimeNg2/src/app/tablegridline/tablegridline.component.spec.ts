import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegridlineComponent } from './tablegridline.component';

describe('TablegridlineComponent', () => {
  let component: TablegridlineComponent;
  let fixture: ComponentFixture<TablegridlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablegridlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablegridlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
