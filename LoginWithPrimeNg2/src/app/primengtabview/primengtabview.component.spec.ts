import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengtabviewComponent } from './primengtabview.component';

describe('PrimengtabviewComponent', () => {
  let component: PrimengtabviewComponent;
  let fixture: ComponentFixture<PrimengtabviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengtabviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengtabviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
