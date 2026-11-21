# Models i adaptador de FitTrack

## Model API i model intern

En aquest projecte utilitzem dos models diferents. El model API
representa les dades que rebem del servidor i el model intern
representa les dades que utilitza la nostra aplicació.

Hem creat un adaptador per transformar les dades de l'API i
evitar problemes amb els diferents formats.

## Fitxers utilitzats

- Model API: src/app/models/entrenament-api.model.ts
- Model intern: src/app/models/entrenament.model.ts
- Adaptador: src/app/adapters/entrenament.adapter.ts

## Taula de mapatge

| Camp API | Camp intern | Transformació |
|---|---|---|
| id | id | Es manté com a text. |
| nom | nom | Eliminem els espais sobrants. |
| descripcio | descripcio | Eliminem els espais sobrants. |
| categoria | categoria | Normalitzem les majúscules i minúscules. |
| data | data | Es manté el format original. |
| ubicacio | ubicacio | Eliminem els espais sobrants. |
| durada | durada | Convertim el valor a nombre. Si no és vàlid, assignem 0. |
| popular | destacat | Canviem el nom del camp. Si no existeix, assignem false. |

## Normalitzacions aplicades

- Eliminació dels espais sobrants amb trim().
- Normalització del format de les categories.
- Conversió i validació de la durada.
- Assignació d'un valor per defecte al camp destacat.

## Comprovació del funcionament

Hem fet una prova amb dades en format API per comprovar
que l'adaptador funciona correctament.

Hem comprovat el resultat a la consola del navegador
i també hem mostrat l'entrenament adaptat a la vista
de FitTrack.