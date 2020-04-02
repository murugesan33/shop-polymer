import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstshirtsComponent } from './menstshirts.component';

describe('MenstshirtsComponent', () => {
  let component: MenstshirtsComponent;
  let fixture: ComponentFixture<MenstshirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenstshirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenstshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
