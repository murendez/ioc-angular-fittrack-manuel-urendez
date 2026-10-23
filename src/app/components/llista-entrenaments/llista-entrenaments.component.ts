
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entrenament } from '../../models/entrenament.model';
import { TargetaEntrenament } from '../targeta-entrenament/targeta-entrenament.component';

@Component({
  selector: 'app-llista-entrenaments',
  imports: [TargetaEntrenament],
  templateUrl: './llista-entrenaments.component.html',
  styleUrl: './llista-entrenaments.component.scss'
})
export class LlistaEntrenaments {

  @Input() entrenaments: Entrenament[] = [];

  @Output() entrenamentSeleccionat = new EventEmitter<Entrenament>();

  seleccionarEntrenament(entrenament: Entrenament) {
    this.entrenamentSeleccionat.emit(entrenament);
  }

}
