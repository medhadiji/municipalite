import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondossierComponent } from './mondossier.component';

describe('MondossierComponent', () => {
  let component: MondossierComponent;
  let fixture: ComponentFixture<MondossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
