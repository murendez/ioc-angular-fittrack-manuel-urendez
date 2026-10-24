 // Definim les dades que ha de tenir cada entrenament
export interface Entrenament {
  id: number;
  nom: string;
  descripcio: string;
  categoria: string;
  data: string;
  durada: number;
  destacat?: boolean;
}
