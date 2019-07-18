import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRequeteComponent } from './delete-requete.component';

describe('DeleteRequeteComponent', () => {
  let component: DeleteRequeteComponent;
  let fixture: ComponentFixture<DeleteRequeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRequeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRequeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
