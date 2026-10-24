
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etiqueta-categoria',
  imports: [],
  templateUrl: './etiqueta-categoria.component.html',
  styleUrl: './etiqueta-categoria.component.scss'
})
export class EtiquetaCategoria {

  // Rep la categoria de l'entrenament per mostrar-la a l'etiqueta
  @Input({ required: true }) categoria!: string;

}
