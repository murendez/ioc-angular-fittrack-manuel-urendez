import { EntrenamentApi } from '../models/entrenament-api.model';
import { Entrenament } from '../models/entrenament.model';

// Transformem les dades de l'API al model intern
export function adaptarEntrenament(api: EntrenamentApi): Entrenament {

  // Normalitzem la categoria
  const categoria = api.categoria.trim().toLowerCase();

  // Convertim la durada a un valor numèric
  const durada = Number(api.durada);

  return {
    id: api.id,
    nom: api.nom.trim(),
    descripcio: api.descripcio.trim(),
    categoria: categoria.charAt(0).toUpperCase() + categoria.slice(1),
    data: api.data,
    ubicacio: api.ubicacio.trim(),
    durada: Number.isFinite(durada) && durada >= 0 ? durada : 0,
    destacat: api.popular ?? false
  };
}

// Preparem les dades d'un entrenament per enviar-les a l'API
export function prepararEntrenamentApi(entrenament: Entrenament): EntrenamentApi {
  return {
    id: entrenament.id,
    nom: entrenament.nom.trim(),
    descripcio: entrenament.descripcio.trim(),
    categoria: entrenament.categoria,
    data: entrenament.data,
    ubicacio: entrenament.ubicacio,
    durada: entrenament.durada,
    popular: entrenament.destacat ?? false
  };
}