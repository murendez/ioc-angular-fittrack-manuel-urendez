# Formulari de cerca de FitTrack

## Formulari reactiu

Hem modificat el formulari de cerca per utilitzar
ReactiveFormsModule en lloc de FormsModule.

El formulari té dos camps:
- Text de cerca.
- Categoria de l'entrenament.

Utilitzem FormGroup i FormControl per gestionar
els valors i les validacions des de TypeScript.

## Validació síncrona

El camp de text té una validació de mínim 3 caràcters.
Si escrivim menys de 3 caràcters, apareix un missatge
d'error i no podem aplicar el filtre.

El camp de text pot quedar buit per permetre
cerques només per categoria.

## Validació asíncrona

Hem creat un validador que consulta l'API per comprovar
si existeixen entrenaments que coincideixen amb la cerca.

Utilitzem timer(400) per esperar 400 mil·lisegons abans
de fer la consulta i switchMap per gestionar-la.

Si no hi ha resultats, mostrem un missatge d'error
i desactivem el botó d'aplicar filtres.

També tornem a executar la validació quan canviem
la categoria.

## Historial de cerques

Utilitzem localStorage per guardar les cerques vàlides.

L'historial:
- Guarda un màxim de 8 cerques.
- Evita duplicats consecutius.
- Conserva les cerques després de tancar el navegador.
- Permet recuperar una cerca anterior amb patchValue().
- Utilitza try/catch per gestionar possibles errors.

## Altres funcionalitats

El botó Restablir filtres neteja els dos camps i
torna a mostrar tots els entrenaments.

També hem millorat la cerca perquè no diferenciï
entre paraules amb accents i sense accents.