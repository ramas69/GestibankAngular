import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClientPotentielComponent } from './delete-client-potentiel.component';

describe('DeleteClientPotentielComponent', () => {
  let component: DeleteClientPotentielComponent;
  let fixture: ComponentFixture<DeleteClientPotentielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteClientPotentielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClientPotentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
