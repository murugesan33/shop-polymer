import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesoutwearComponent } from './ladiesoutwear.component';

describe('LadiesoutwearComponent', () => {
  let component: LadiesoutwearComponent;
  let fixture: ComponentFixture<LadiesoutwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesoutwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesoutwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
