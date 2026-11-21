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