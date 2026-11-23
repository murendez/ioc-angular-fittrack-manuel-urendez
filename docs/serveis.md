
# Servei HTTP de FitTrack

## Funcionament del servei

Hem creat EntrenamentService per gestionar la comunicació
entre FitTrack i l'API local.

Utilitzem HttpClient per fer les peticions HTTP i
l'adaptador per transformar les dades que rebem.

Fitxer del servei:
src/app/services/entrenament.service.ts

## Peticions HTTP

- GET: obtenirEntrenaments() consulta els entrenaments.
- POST: crearEntrenament() permet guardar un entrenament nou.

L'endpoint utilitzat és:
http://localhost:4301/entrenaments

La URL base està configurada a:
src/environments/environment.ts

## Gestió dels estats

Utilitzem un signal per guardar l'estat de la petició.

Els estats possibles són:
- inicial: encara no s'ha fet cap petició.
- carregant: estem esperant les dades.
- exit: hem rebut els entrenaments correctament.
- error: la petició ha fallat.

Els components poden consultar aquest estat, però no
modificar-lo directament.

## Gestió dels errors i reintent

Utilitzem catchError per detectar els errors de l'API.

Quan la petició falla, FitTrack mostra un missatge
i el botó "Tornar a intentar".

El mètode reintentar() envia un avís al Subject i
switchMap executa una nova petició HTTP.

Això permet recuperar els entrenaments sense haver
d'actualitzar tota la pàgina.

## Adaptació de dades

Quan rebem els entrenaments, utilitzem
adaptarEntrenament() per convertir-los al model intern.

Quan creem un entrenament, utilitzem
prepararEntrenamentApi() per preparar les dades
que enviarem al servidor.
