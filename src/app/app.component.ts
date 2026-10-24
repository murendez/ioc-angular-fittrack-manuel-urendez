
import { Component } from '@angular/core';
import { LlistaEntrenaments } from './components/llista-entrenaments/llista-entrenaments.component';
import { FiltreEntrenaments } from './components/filtre-entrenaments/filtre-entrenaments.component';
import { Entrenament } from './models/entrenament.model';
import { ENTRENAMENTS } from './entrenament.mock';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [LlistaEntrenaments, FiltreEntrenaments, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {

  // Carreguem la llista inicial d'entrenaments
  entrenaments = ENTRENAMENTS;

  entrenamentSeleccionat: Entrenament | null = null;

  aplicarFiltre(filtres: { text: string; categoria: string }) {

    // Netegem la selecció anterior quan canviem els filtres
    this.entrenamentSeleccionat = null;

    this.entrenaments = ENTRENAMENTS.filter(entrenament => {

      // Comprovem si el nom conté el text que hem escrit
      const coincideixText = entrenament.nom
        .toLowerCase()
        .includes(filtres.text.toLowerCase());

      // Comprovem si coincideix amb la categoria seleccionada
      const coincideixCategoria =
        filtres.categoria === '' ||
        entrenament.categoria === filtres.categoria;

      return coincideixText && coincideixCategoria;
    });
  }

  // Guardem l'entrenament que ha seleccionat l'usuari
  seleccionarEntrenament(entrenament: Entrenament) {
    this.entrenamentSeleccionat = entrenament;
  }

}
