import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortEventComponent } from './sort-event.component';

describe('SortEventComponent', () => {
  let component: SortEventComponent;
  let fixture: ComponentFixture<SortEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
