import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDossiersComponent } from './gestion-dossiers.component';

describe('GestionDossiersComponent', () => {
  let component: GestionDossiersComponent;
  let fixture: ComponentFixture<GestionDossiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDossiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
