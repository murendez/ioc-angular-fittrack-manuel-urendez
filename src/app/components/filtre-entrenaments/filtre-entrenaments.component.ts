
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtre-entrenaments',
  imports: [FormsModule],
  templateUrl: './filtre-entrenaments.component.html',
  styleUrl: './filtre-entrenaments.component.scss'
})
export class FiltreEntrenaments {

  // Guardem el text de cerca i la categoria escollida
  textCerca = '';
  categoriaSeleccionada = '';

  // Preparem l'esdeveniment per enviar els filtres al component pare
  @Output() filtreAplicat = new EventEmitter<{
    text: string;
    categoria: string;
  }>();

  // Enviem els filtres quan l'usuari prem el botó Aplicar
  aplicarFiltre() {
    this.filtreAplicat.emit({
      text: this.textCerca,
      categoria: this.categoriaSeleccionada
    });
  }

  // Buidem els camps i avisem el pare per mostrar tots els entrenaments
  restablirFiltres() {
    this.textCerca = '';
    this.categoriaSeleccionada = '';

    this.filtreAplicat.emit({
      text: '',
      categoria: ''
    });
  }

}
