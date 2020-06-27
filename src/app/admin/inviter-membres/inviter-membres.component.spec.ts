import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviterMembresComponent } from './inviter-membres.component';

describe('InviterMembresComponent', () => {
  let component: InviterMembresComponent;
  let fixture: ComponentFixture<InviterMembresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviterMembresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviterMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
