
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtre-entrenaments',
  imports: [],
  templateUrl: './filtre-entrenaments.component.html',
  styleUrl: './filtre-entrenaments.component.scss'
})
export class FiltreEntrenaments {

  @Output() filtreAplicat = new EventEmitter<string>();

  aplicarFiltre() {
    this.filtreAplicat.emit('Running');
  }

}
