import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesshirtsComponent } from './ladiesshirts.component';

describe('LadiesshirtsComponent', () => {
  let component: LadiesshirtsComponent;
  let fixture: ComponentFixture<LadiesshirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesshirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
