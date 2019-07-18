import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientPotentielComponent } from './add-client-potentiel.component';

describe('AddClientPotentielComponent', () => {
  let component: AddClientPotentielComponent;
  let fixture: ComponentFixture<AddClientPotentielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientPotentielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientPotentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
