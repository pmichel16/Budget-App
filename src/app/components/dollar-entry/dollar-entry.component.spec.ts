import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarEntryComponent } from './dollar-entry.component';

describe('DollarEntryComponent', () => {
  let component: DollarEntryComponent;
  let fixture: ComponentFixture<DollarEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollarEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
