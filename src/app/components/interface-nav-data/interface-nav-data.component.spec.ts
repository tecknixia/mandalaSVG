import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceNavDataComponent } from './interface-nav-data.component';

describe('InterfaceNavDataComponent', () => {
  let component: InterfaceNavDataComponent;
  let fixture: ComponentFixture<InterfaceNavDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceNavDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceNavDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
