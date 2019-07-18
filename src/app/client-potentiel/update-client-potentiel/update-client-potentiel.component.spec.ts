import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientPotentielComponent } from './update-client-potentiel.component';

describe('UpdateClientPotentielComponent', () => {
  let component: UpdateClientPotentielComponent;
  let fixture: ComponentFixture<UpdateClientPotentielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientPotentielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientPotentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
