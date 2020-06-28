import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreCommissionListComponent } from './membre-commission-list.component';

describe('MembreCommissionListComponent', () => {
  let component: MembreCommissionListComponent;
  let fixture: ComponentFixture<MembreCommissionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreCommissionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreCommissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
