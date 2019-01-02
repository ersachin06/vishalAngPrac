import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V8custompipesComponent } from './v8custompipes.component';

describe('V8custompipesComponent', () => {
  let component: V8custompipesComponent;
  let fixture: ComponentFixture<V8custompipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V8custompipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V8custompipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
