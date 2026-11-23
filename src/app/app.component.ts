
import { Component, inject, signal, effect } from '@angular/core';
import { LlistaEntrenaments } from './components/llista-entrenaments/llista-entrenaments.component';
import { FiltreEntrenaments } from './components/filtre-entrenaments/filtre-entrenaments.component';
import { Entrenament } from './models/entrenament.model';
import { DatePipe } from '@angular/common';
import { EntrenamentService } from './services/entrenament.service';
import { normalitzarText } from './services/entrenament.service';

@Component({
  selector: 'app-root',
  imports: [LlistaEntrenaments, FiltreEntrenaments, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {

  // Comprovem la injecció del servei
  private readonly entrenamentService = inject(EntrenamentService);

  // Consultem l'estat de les peticions HTTP
  readonly estatServei = this.entrenamentService.estat;

  // Guardem tots els entrenaments rebuts del servidor
  private totsElsEntrenaments: Entrenament[] = [];

  // Guardem els entrenaments en un signal
  entrenaments = signal<Entrenament[]>([]);

  entrenamentSeleccionat: Entrenament | null = null;

  // Actualitzem la llista quan el servei rep entrenaments
  private readonly sincronitzarEntrenaments = effect(() => {
    const estat = this.estatServei();

    if (estat.estat === 'exit') {
      this.totsElsEntrenaments = estat.elements;
      this.entrenaments.set(estat.elements);
    }
  });

  constructor() {
    // Demanem els entrenaments al servidor
    this.entrenamentService.obtenirEntrenaments().subscribe({
      next: (dades) => {
        this.totsElsEntrenaments = dades;
        this.entrenaments.set(dades);
      },
      error: (error) => {
        console.error('Error carregant entrenaments:', error);
      }
    });
  }

  // Tornem a demanar els entrenaments a l'API
  reintentarCarrega(): void {
    this.entrenamentService.reintentar();
  }
  
  aplicarFiltre(filtres: { text: string; categoria: string }) {

    // Netegem la selecció anterior quan canviem els filtres
    this.entrenamentSeleccionat = null;

    this.entrenaments.set(this.totsElsEntrenaments.filter(entrenament => {

      // Comparem els noms sense tenir en compte els accents
      const coincideixText = normalitzarText(entrenament.nom)
        .includes(normalitzarText(filtres.text));

      // Comprovem si coincideix amb la categoria seleccionada
      const coincideixCategoria =
        filtres.categoria === '' ||
        entrenament.categoria === filtres.categoria;

      return coincideixText && coincideixCategoria;
    }));
  }

  // Guardem l'entrenament que ha seleccionat l'usuari
  seleccionarEntrenament(entrenament: Entrenament) {
    this.entrenamentSeleccionat = entrenament;
  }

}
