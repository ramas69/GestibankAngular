import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConseillerComponent } from './delete-conseiller.component';

describe('DeleteConseillerComponent', () => {
  let component: DeleteConseillerComponent;
  let fixture: ComponentFixture<DeleteConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
