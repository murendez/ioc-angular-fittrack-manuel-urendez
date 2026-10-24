
import { Component } from '@angular/core';
import { LlistaEntrenaments } from './components/llista-entrenaments/llista-entrenaments.component';
import { FiltreEntrenaments } from './components/filtre-entrenaments/filtre-entrenaments.component';
import { Entrenament } from './models/entrenament.model';
import { ENTRENAMENTS } from './entrenament.mock';

@Component({
  selector: 'app-root',
  imports: [LlistaEntrenaments, FiltreEntrenaments],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {

  entrenaments = ENTRENAMENTS;

  entrenamentSeleccionat: Entrenament | null = null;

  
  aplicarFiltre(filtres: { text: string; categoria: string }) {
    this.entrenaments = ENTRENAMENTS.filter(entrenament => {

      const coincideixText = entrenament.nom
        .toLowerCase()
        .includes(filtres.text.toLowerCase());

      const coincideixCategoria =
        filtres.categoria === '' ||
        entrenament.categoria === filtres.categoria;

      return coincideixText && coincideixCategoria;
    });
  }


  seleccionarEntrenament(entrenament: Entrenament) {
    this.entrenamentSeleccionat = entrenament;
  }

}
