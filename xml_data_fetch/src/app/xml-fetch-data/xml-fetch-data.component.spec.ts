import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlFetchDataComponent } from './xml-fetch-data.component';

describe('XmlFetchDataComponent', () => {
  let component: XmlFetchDataComponent;
  let fixture: ComponentFixture<XmlFetchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlFetchDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlFetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
