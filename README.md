
# FitTrack

## Autor
Manuel Urendez Molero

## Descripció
FitTrack és una aplicació web per consultar entrenaments esportius,
com córrer, anar en bicicleta o fer exercicis de força.

Permet consultar una llista d'entrenaments, filtrar-los
per nom i categoria i seleccionar-ne un per veure'n els detalls.

Ara també podem carregar els entrenaments des d'una API local
i guardar les últimes cerques que hem fet.

## Versions utilitzades
- Node.js: 24.21.0
- npm: 11.19.0
- Angular CLI: 22.2.2
- Angular: 22.x
- TypeScript: 6.0.3
- RxJS: 7.8.2
- json-server: 1.0.0-beta.15
- Git: 2.54.0

## Com instal·lar i executar el projecte

Per instal·lar les dependències:

```bash
npm install
```

Primer obrim un terminal per iniciar l'API:

```bash
npm run api
```

L'API funciona a http://localhost:4301/entrenaments

Després obrim un altre terminal per iniciar Angular:

```bash
npm start
```

Podem obrir FitTrack a http://localhost:4200

Cal tenir els dos servidors en funcionament perquè
l'aplicació pugui carregar els entrenaments.

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

## Funcionalitats de l'EAC3
- Hem creat una API local amb json-server.
- Ara els entrenaments es carreguen des de l'API.
- Hem creat un servei per consultar i crear entrenaments amb GET i POST.
- Hem separat el model de l'API del model que utilitza FitTrack.
- Hem creat un adaptador per preparar les dades que rebem.
- Hem afegit missatges de càrrega i d'error.
- Si l'API falla, podem tornar a intentar carregar les dades.
- Hem utilitzat signals per actualitzar la llista.
- Hem canviat el cercador per un formulari reactiu.
- El formulari comprova que el text tingui almenys 3 caràcters.
- També consulta l'API per comprovar si hi ha resultats.
- Podem buscar sense escriure els accents.
- Es guarden les últimes 8 cerques al navegador.
- Podem recuperar una cerca anterior i tornar-la a aplicar.

## Components principals
- LlistaEntrenaments: mostra els entrenaments disponibles.
- TargetaEntrenament: mostra les dades de cada entrenament.
- EtiquetaCategoria: mostra la categoria de l'entrenament.
- FiltreEntrenaments: permet buscar, filtrar i recuperar cerques.
- App: mostra els entrenaments i connecta els components.

Els components es comuniquen mitjançant @Input i @Output.

## Servei i fitxers principals

- Servei HTTP: src/app/services/entrenament.service.ts
- Model API: src/app/models/entrenament-api.model.ts
- Model intern: src/app/models/entrenament.model.ts
- Adaptador: src/app/adapters/entrenament.adapter.ts
- Dades de l'API: tools/api/entrenaments.json
- Configuració de l'API: src/environments/environment.ts

## Documentació de l'EAC3

Hem creat tres fitxers per explicar les parts principals del projecte:

- docs/models.md: explica els models i l'adaptador.
- docs/serveis.md: explica les peticions HTTP i els errors.
- docs/formularis.md: explica el cercador i l'historial.

## Comprovacions

Per comprovar que el projecte compila:

```bash
npm run build
```

Per executar els tests:

```bash
npm test
```

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

### EAC3
- API local configurada.
- Models i adaptador creats.
- Servei HTTP amb GET i POST.
- Gestió de càrrega, errors i reintent.
- Formulari reactiu amb validacions.
- Historial de cerques amb localStorage.
- Revisió de l'accessibilitat i el disseny responsive.

## Repositori GitHub
https://github.com/murendez/ioc-angular-fittrack-manuel-urendez

Branca de l'EAC2: ra2-components

Branca de l'EAC3: ra3-serveis
