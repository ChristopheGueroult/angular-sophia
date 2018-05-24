import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConnectComponent } from './form-connect.component';

describe('FormConnectComponent', () => {
  let component: FormConnectComponent;
  let fixture: ComponentFixture<FormConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
