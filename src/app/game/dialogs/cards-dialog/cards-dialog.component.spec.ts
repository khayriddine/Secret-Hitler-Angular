import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDialogComponent } from './cards-dialog.component';

describe('CardsDialogComponent', () => {
  let component: CardsDialogComponent;
  let fixture: ComponentFixture<CardsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
