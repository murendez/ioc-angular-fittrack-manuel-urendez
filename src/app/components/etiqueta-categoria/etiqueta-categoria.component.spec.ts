
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaCategoria } from './etiqueta-categoria.component';

describe('EtiquetaCategoria', () => {
  let component: EtiquetaCategoria;
  let fixture: ComponentFixture<EtiquetaCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaCategoria]
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquetaCategoria);
    component = fixture.componentInstance;

    // Enviem una categoria de prova al component
    fixture.componentRef.setInput('categoria', 'Running');

    await fixture.whenStable();
  });

  // Comprovem que el component es crea correctament
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
