import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensoutwearComponent } from './mensoutwear.component';

describe('MensoutwearComponent', () => {
  let component: MensoutwearComponent;
  let fixture: ComponentFixture<MensoutwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensoutwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensoutwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
