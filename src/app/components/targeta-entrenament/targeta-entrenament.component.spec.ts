
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaEntrenament } from './targeta-entrenament.component';
import { Entrenament } from '../../models/entrenament.model';

describe('TargetaEntrenament', () => {
  let component: TargetaEntrenament;
  let fixture: ComponentFixture<TargetaEntrenament>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaEntrenament],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaEntrenament);
    component = fixture.componentInstance;

    // Creem un entrenament de prova per a la targeta
    const entrenamentProva: Entrenament = {
      id: 1,
      nom: 'Carrera contínua',
      descripcio: 'Carrera suau',
      categoria: 'Running',
      data: '2026-10-20',
      durada: 45,
      destacat: false
    };

    // Passem l'entrenament al component abans de mostrar-lo
    fixture.componentRef.setInput('entrenament', entrenamentProva);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
