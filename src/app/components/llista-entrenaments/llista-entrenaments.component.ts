
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

  // Rep la llista d'entrenaments del component pare
  @Input() entrenaments: Entrenament[] = [];

  // Permet avisar el pare quan se selecciona un entrenament
  @Output() entrenamentSeleccionat = new EventEmitter<Entrenament>();

  // Enviem l'entrenament seleccionat al component pare
  seleccionarEntrenament(entrenament: Entrenament) {
    this.entrenamentSeleccionat.emit(entrenament);
  }

}
