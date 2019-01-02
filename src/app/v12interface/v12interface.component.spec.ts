import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V12interfaceComponent } from './v12interface.component';

describe('V12interfaceComponent', () => {
  let component: V12interfaceComponent;
  let fixture: ComponentFixture<V12interfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V12interfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V12interfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
