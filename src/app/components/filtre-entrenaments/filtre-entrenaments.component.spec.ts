import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltreEntrenaments } from './filtre-entrenaments.component';

describe('FiltreEntrenaments', () => {
  let component: FiltreEntrenaments;
  let fixture: ComponentFixture<FiltreEntrenaments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreEntrenaments],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltreEntrenaments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
