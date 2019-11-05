import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntromainpageComponent } from './intromainpage.component';

describe('IntromainpageComponent', () => {
  let component: IntromainpageComponent;
  let fixture: ComponentFixture<IntromainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntromainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntromainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
