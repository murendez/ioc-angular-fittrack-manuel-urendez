import { Service, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject, switchMap, map,tap, catchError, throwError, EMPTY} from 'rxjs';
import { environment } from '../../environments/environment';
import { EntrenamentApi } from '../models/entrenament-api.model';
import { Entrenament } from '../models/entrenament.model';
import {adaptarEntrenament,prepararEntrenamentApi} from '../adapters/entrenament.adapter';

// Estats possibles de la càrrega
export interface EstatEntrenaments {
  estat: 'inicial' | 'carregant' | 'exit' | 'error';
  elements: Entrenament[];
  error?: string;
}

// Eliminem accents i passem el text a minúscules
export function normalitzarText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

@Service()
export class EntrenamentService {

  // Client per comunicar-nos amb l'API
  private readonly http = inject(HttpClient);

  // Adreça dels entrenaments al servidor
  private readonly url = `${environment.apiUrl}/entrenaments`;

  // Guardem l'estat actual dels entrenaments
  private readonly _estat = signal<EstatEntrenaments>({
    estat: 'inicial',
    elements: []
  });

  // Els components poden consultar l'estat, però no modificar-lo
  readonly estat = this._estat.asReadonly();

  // Avisem quan volem carregar els entrenaments
  private readonly peticions$ = new Subject<void>();

  constructor() {
    // Escoltem les peticions de recàrrega
    this.peticions$.pipe(
      switchMap(() =>
        this.obtenirEntrenaments().pipe(
          catchError(() => EMPTY)
        )
      )
    ).subscribe();
  }

  // Obtenim els entrenaments i controlem l'estat de la petició
  obtenirEntrenaments(): Observable<Entrenament[]> {

    // Indiquem que comença la càrrega
    this._estat.set({
      estat: 'carregant',
      elements: []
    });

    return this.http.get<EntrenamentApi[]>(this.url).pipe(
      map(dades => dades.map(adaptarEntrenament)),

      tap(entrenaments => {
        // Guardem els entrenaments rebuts
        this._estat.set({
          estat: 'exit',
          elements: entrenaments
        });
      }),

      catchError(error => {
        // Guardem l'error si falla la petició
        this._estat.set({
          estat: 'error',
          elements: [],
          error: 'No s’han pogut carregar els entrenaments.'
        });

        return throwError(() => error);
      })
    );
  }

  // Tornem a carregar els entrenaments
  reintentar(): void {
    this.peticions$.next();
  }

  // Enviem un entrenament nou al servidor
  crearEntrenament(entrenament: Entrenament): Observable<Entrenament> {
    const dadesApi = prepararEntrenamentApi(entrenament);

    return this.http.post<EntrenamentApi>(this.url, dadesApi).pipe(
      map(dades => adaptarEntrenament(dades)),
      tap(() => this.reintentar())
    );
  }

  // Comptem els entrenaments que coincideixen amb la cerca
  comptarResultats(text: string, categoria: string): Observable<number> {
    return this.http.get<EntrenamentApi[]>(this.url).pipe(
      map(dades => dades.map(adaptarEntrenament)),
      map(entrenaments => entrenaments.filter(entrenament => {
        const coincideixText = normalitzarText(entrenament.nom)
          .includes(normalitzarText(text));

        const coincideixCategoria =
          categoria === '' || entrenament.categoria === categoria;

        return coincideixText && coincideixCategoria;
      }).length)
    );
  }
}