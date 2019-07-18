import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientPotentielComponent } from './detail-client-potentiel.component';

describe('DetailClientPotentielComponent', () => {
  let component: DetailClientPotentielComponent;
  let fixture: ComponentFixture<DetailClientPotentielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClientPotentielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientPotentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
