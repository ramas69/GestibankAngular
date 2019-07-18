import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequeteComponent } from './update-requete.component';

describe('UpdateRequeteComponent', () => {
  let component: UpdateRequeteComponent;
  let fixture: ComponentFixture<UpdateRequeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRequeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRequeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
