// Definim les dades que ha de tenir cada entrenament
export interface Entrenament {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  data: string;
  ubicacio: string;
  durada: number;
  destacat?: boolean;
}