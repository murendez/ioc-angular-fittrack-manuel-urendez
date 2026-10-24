
# FitTrack

## Autor
Manuel Urendez Molero

## Descripció
FitTrack és una aplicació web per consultar entrenaments esportius,
com córrer, anar en bicicleta o fer exercicis de força.

Permet consultar una llista d'entrenaments, filtrar-los
per nom i categoria i seleccionar-ne un per veure'n els detalls.

## Versions utilitzades
- Node.js: 24.21.0
- npm: 11.19.0
- Angular CLI: 22.2.2
- Angular: 22.x
- Git: 2.54.0

## Com instal·lar i executar el projecte

Per instal·lar les dependències:

```bash
npm install
```

Per executar l'aplicació:

```bash
ng serve
```

Després, obrir http://localhost:4200 al navegador.

## Funcionalitats de l'EAC2
- Llista de 10 entrenaments de prova.
- Targetes amb nom, descripció, categoria i durada.
- Identificació dels entrenaments destacats.
- Cerca d'entrenaments per nom i categoria.
- Validació del formulari de cerca.
- Botó per restablir els filtres.
- Comptador d'entrenaments trobats.
- Missatge quan no hi ha resultats.
- Selecció d'un entrenament per consultar-ne els detalls.
- Visualització de la data en format dia/mes/any.
- Disseny adaptat a pantalles d'ordinador i mòbil.

## Components principals
- LlistaEntrenaments: mostra els entrenaments disponibles.
- TargetaEntrenament: mostra les dades de cada entrenament.
- EtiquetaCategoria: mostra la categoria de l'entrenament.
- FiltreEntrenaments: permet buscar i filtrar entrenaments.

Els components es comuniquen mitjançant @Input i @Output.

## Estat del projecte

### EAC1
- Entorn de desenvolupament configurat.
- Projecte Angular creat amb routing i SCSS.
- Repositori Git inicialitzat i publicat a GitHub.
- Branques de treball creades.
- Pàgina inicial personalitzada.
- Hot reload comprovat.

### EAC2
- Model Entrenament i dades de prova creats.
- Components implementats.
- Formulari de filtres i validacions.
- Llista i panell de detall funcionals.
- Accessibilitat bàsica comprovada amb teclat.
- Visualització en mòbil comprovada.

## Repositori GitHub
https://github.com/murendez/ioc-angular-fittrack-manuel-urendez

Branca de l'EAC2: ra2-components
