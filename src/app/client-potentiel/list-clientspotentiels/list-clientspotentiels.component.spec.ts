import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientspotentielsComponent } from './list-clientspotentiels.component';

describe('ListClientspotentielsComponent', () => {
  let component: ListClientspotentielsComponent;
  let fixture: ComponentFixture<ListClientspotentielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClientspotentielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientspotentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
