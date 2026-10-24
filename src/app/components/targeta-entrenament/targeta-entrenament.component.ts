
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entrenament } from '../../models/entrenament.model';
import { EtiquetaCategoria } from '../etiqueta-categoria/etiqueta-categoria.component';

@Component({
  selector: 'app-targeta-entrenament',
  imports: [EtiquetaCategoria],
  templateUrl: './targeta-entrenament.component.html',
  styleUrl: './targeta-entrenament.component.scss'
})
export class TargetaEntrenament {

  // Rep un entrenament del component LlistaEntrenaments
  @Input({ required: true }) entrenament!: Entrenament;

  // Preparem l'esdeveniment per avisar quan seleccionem un entrenament
  @Output() seleccionat = new EventEmitter<Entrenament>();

  // Enviem l'entrenament seleccionat al component pare
  seleccionar() {
    this.seleccionat.emit(this.entrenament);
  }

}
