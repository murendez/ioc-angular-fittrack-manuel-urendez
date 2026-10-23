

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

  @Input({ required: true }) entrenament!: Entrenament;

  @Output() seleccionat = new EventEmitter<Entrenament>();

  seleccionar() {
    this.seleccionat.emit(this.entrenament);
  }

}

