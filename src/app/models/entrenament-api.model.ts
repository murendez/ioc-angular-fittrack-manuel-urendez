// Definim l'estructura de les dades que retorna l'API
export interface EntrenamentApi {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  data: string;
  ubicacio: string;
  durada: number | string;
  popular?: boolean;
}