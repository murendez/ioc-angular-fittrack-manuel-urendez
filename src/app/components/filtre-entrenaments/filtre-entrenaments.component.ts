
import { Component, Output, EventEmitter, inject } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,AbstractControl,AsyncValidatorFn} from '@angular/forms';
import { timer, switchMap, map, catchError, of } from 'rxjs';
import { EntrenamentService } from '../../services/entrenament.service';

// Dades que guardarem de cada cerca
interface CercaGuardada {
  text: string;
  categoria: string;
}

@Component({
  selector: 'app-filtre-entrenaments',
  imports: [ReactiveFormsModule],
  templateUrl: './filtre-entrenaments.component.html',
  styleUrl: './filtre-entrenaments.component.scss'
})
export class FiltreEntrenaments {

  // Servei per consultar els entrenaments
  private readonly entrenamentService = inject(EntrenamentService);

  // Historial de les últimes cerques
  historial: CercaGuardada[] = [];

  // Formulari reactiu per cercar entrenaments
  formulari = new FormGroup({    
    text: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.minLength(3)
      ],
      asyncValidators: [
        control => this.validarResultats()(control)
      ]
    }),

    categoria: new FormControl('', {
      nonNullable: true
    })
  });

  // Comprovem si la cerca té resultats a l'API
  private validarResultats(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const text = control.value?.trim() ?? '';
      const categoria = this.formulari?.controls.categoria.value ?? '';

      if (text.length < 3) {
        return of(null);
      }

      return timer(400).pipe(
        switchMap(() =>
          this.entrenamentService.comptarResultats(text, categoria)
        ),
        map(total => total > 0 ? null : { senseResultats: true }),
        catchError(() => of(null))
      );
    };
  }

  constructor() {
    // Recuperem les cerques anteriors
    this.carregarHistorial();

    // Tornem a validar el text quan canviem la categoria
    this.formulari.controls.categoria.valueChanges.subscribe(() => {
      this.formulari.controls.text.updateValueAndValidity();
    });
  }

  // Preparem l'esdeveniment per enviar els filtres al component pare
  @Output() filtreAplicat = new EventEmitter<{
    text: string;
    categoria: string;
  }>();

  // Guardem les últimes cerques al navegador
  private guardarCerca(cerca: CercaGuardada): void {
    const ultima = this.historial[0];

    // Evitem guardar dues cerques iguals seguides
    if (ultima?.text === cerca.text &&
        ultima?.categoria === cerca.categoria) {
      return;
    }

    // Afegim la cerca al principi i conservem les 8 últimes
    this.historial = [cerca, ...this.historial].slice(0, 8);

    try {
      localStorage.setItem('fittrack-historial', JSON.stringify(this.historial));
    } catch (error) {
      console.error('No s’ha pogut guardar l’historial:', error);
    }
  }

  // Enviem els filtres i guardem la cerca
  aplicarFiltre(): void {
    if (this.formulari.invalid || this.formulari.pending) {
      return;
    }

    const cerca = this.formulari.getRawValue();

    // Guardem només les cerques amb algun criteri
    if (cerca.text.trim() !== '' || cerca.categoria !== '') {
      this.guardarCerca(cerca);
    }

    this.filtreAplicat.emit(cerca);
  }

  // Netegem els camps i mostrem tots els entrenaments
  restablirFiltres(): void {
    this.formulari.reset();

    this.filtreAplicat.emit({
      text: '',
      categoria: ''
    });
  }

  // Recuperem les cerques guardades al navegador
  private carregarHistorial(): void {
    try {
      const dades = localStorage.getItem('fittrack-historial');

      if (dades) {
        const historial = JSON.parse(dades);

        if (Array.isArray(historial)) {
          this.historial = historial
            .filter(cerca =>
              typeof cerca?.text === 'string' &&
              typeof cerca?.categoria === 'string'
            )
            .slice(0, 8);
        }
      }
    } catch (error) {
      console.error('No s’ha pogut carregar l’historial:', error);
      this.historial = [];
    }
  }

  // Recuperem una cerca de l'historial
  recuperarCerca(cerca: CercaGuardada): void {
    this.formulari.patchValue({
      text: cerca.text,
      categoria: cerca.categoria
    });
  }

}
