
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtre-entrenaments',
  imports: [FormsModule],
  templateUrl: './filtre-entrenaments.component.html',
  styleUrl: './filtre-entrenaments.component.scss'
})
export class FiltreEntrenaments {

  textCerca = '';
  categoriaSeleccionada = '';

  @Output() filtreAplicat = new EventEmitter<{
    text: string;
    categoria: string;
  }>();

  aplicarFiltre() {
    this.filtreAplicat.emit({
      text: this.textCerca,
      categoria: this.categoriaSeleccionada
    });
  }

  
  restablirFiltres() {
    this.textCerca = '';
    this.categoriaSeleccionada = '';

    this.filtreAplicat.emit({
      text: '',
      categoria: ''
    });
  }


}
