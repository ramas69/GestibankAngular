import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequeteComponent } from './detail-requete.component';

describe('DetailRequeteComponent', () => {
  let component: DetailRequeteComponent;
  let fixture: ComponentFixture<DetailRequeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRequeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRequeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
