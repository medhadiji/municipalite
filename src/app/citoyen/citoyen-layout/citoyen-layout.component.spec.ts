import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitoyenLayoutComponent } from './citoyen-layout.component';

describe('CitoyenLayoutComponent', () => {
  let component: CitoyenLayoutComponent;
  let fixture: ComponentFixture<CitoyenLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitoyenLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitoyenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
