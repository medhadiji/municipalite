import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembreCommissionComponent } from './add-membre-commission.component';

describe('AddMembreCommissionComponent', () => {
  let component: AddMembreCommissionComponent;
  let fixture: ComponentFixture<AddMembreCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMembreCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembreCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
