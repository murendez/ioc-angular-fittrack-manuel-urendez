
import { Entrenament } from './models/entrenament.model';
// Llista de 10 entrenaments de prova per utilitzar a FitTrack

export const ENTRENAMENTS: Entrenament[] = [
  {
    id: 1,
    nom: 'Carrera contínua',
    descripcio: 'Carrera suau per millorar la resistència',
    categoria: 'Running',
    data: '2026-10-20',
    durada: 45,
    destacat: false
  },
  {
    id: 2,
    nom: 'Força amb kettlebell',
    descripcio: 'Entrenament de força general',
    categoria: 'Força',
    data: '2026-10-21',
    durada: 40,
    destacat: true
  },
  
  {
    id: 3,
    nom: 'Tirada llarga',
    descripcio: 'Carrera de resistència de 12 km',
    categoria: 'Running',
    data: '2026-10-22',
    durada: 65,
    destacat: true
  },
  {
    id: 4,
    nom: 'BTT de muntanya',
    descripcio: 'Sortida en bicicleta per camins de muntanya',
    categoria: 'Ciclisme',
    data: '2026-10-23',
    durada: 90,
    destacat: false
  },
  {
    id: 5,
    nom: 'Força tren superior',
    descripcio: 'Exercicis de braços, espatlles i esquena',
    categoria: 'Força',
    data: '2026-10-24',
    durada: 35,
    destacat: false
  },
  {
    id: 6,
    nom: 'Carrera de recuperació',
    descripcio: 'Carrera suau després d’un entrenament intens',
    categoria: 'Running',
    data: '2026-10-25',
    durada: 30,
    destacat: false
  },
  {
    id: 7,
    nom: 'Entrenament amb comba',
    descripcio: 'Exercicis cardiovasculars amb comba',
    categoria: 'Cardio',
    data: '2026-10-26',
    durada: 20,
    destacat: false
  },
  {
    id: 8,
    nom: 'Sèries de velocitat',
    descripcio: 'Intervals de carrera a ritme elevat',
    categoria: 'Running',
    data: '2026-10-27',
    durada: 45,
    destacat: true
  },
  {
    id: 9,
    nom: 'Mobilitat i estiraments',
    descripcio: 'Exercicis de flexibilitat i mobilitat',
    categoria: 'Mobilitat',
    data: '2026-10-28',
    durada: 25,
    destacat: false
  },
  {
    id: 10,
    nom: 'Ruta de ciclisme',
    descripcio: 'Sortida de resistència amb bicicleta',
    categoria: 'Ciclisme',
    data: '2026-10-29',
    durada: 75,
    destacat: false
  }

];
