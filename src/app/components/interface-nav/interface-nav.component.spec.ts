import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceNavComponent } from './interface-nav.component';

describe('InterfaceNavComponent', () => {
  let component: InterfaceNavComponent;
  let fixture: ComponentFixture<InterfaceNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
