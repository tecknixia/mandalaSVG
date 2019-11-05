import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceNavEditLayerComponent } from './interface-nav-edit-layer.component';

describe('InterfaceNavEditLayerComponent', () => {
  let component: InterfaceNavEditLayerComponent;
  let fixture: ComponentFixture<InterfaceNavEditLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceNavEditLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceNavEditLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
