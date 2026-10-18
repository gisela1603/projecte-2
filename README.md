# Stray Kids: the Archive

Pàgina web no oficial sobre el recorregut de Stray Kids en que es poden consultar els seus àlbums i eras. També es pot consultar informació sobre SKZOO, els personatges animats dels membres.

## Instal·lació, execució i publicació

Primerament, cal executar 'npm install' a la terminal des de la carpeta vue-projecte-2 per a instal·lar les dependències que necessita el projecte.

Llavors cal configurar la connexió amb Firebase. Per a fer això cal afegir una aplicació web al projecte. Durant el procediment s'han de completar el document `.env.local` al VScode amb els valors de configuració que dona el mateix Firebase de l'aplicació a l'apartat de Config.

Per a veure-la llavors a l'ordinador s'executa 'npm run dev'
La terminal llavors dona un local host i es pot veure obrint l'enllaç.

Posteriorment, per a comprobar que la web es pot publicar s'execute 'npm run build', ordre que prepara una versió optimitzada de la web. Això crea els fitxers per publicar dins la carpeta dist.

Per a inicialitzar el Hosting amb Firebase s'ha de primer iniciar sessió (si no s'ha fet enteriorment) amb 'firebase login' i després incialitzar Firebase amb 'firebase init' on s'ha d'escollir Hosting i Firestore i també s'ha de seleccionar a quin projecte de Firebase es voll pujar la web.

Si un document té el camp opcional 'coverUrl', la targeta mostra aquesta portada. Si no el té, es mostra la portada del catàleg d'Apple Music per als àlbums reconeguts; en clicar-la, s'obre la fitxa de l'àlbum a Apple Music. Si no es pot carregar cap portada, es mostra un marcador.

Per a publicar-la s'ha d'executar a la terminal 'firebase deploy --only hosting --project straykids-the-archive'

## Components propis

- 'SiteHeader.vue': menú de navegació.
- 'AlbumCard.vue': mostra un àlbum.
- 'SkzooCard.vue': mostra la fitxa d'un personatge SKZOO.

L'ús del terme Card ve donat de que els diferents apartats, àlbums o personatges, es presenten com si fossin targetes informatives d'aquests.

### Comunicació a través de props

'AlbumsAndEras.vue' és el pare i obté cada àlbum i la seva informació d'una colecció creada a Firestore i passa cada un al component fill 'AlbumCard.vue':

```vue
<AlbumCard v-for="album in group.albums" :key="album.id" :album="album" />
```

'AlbumCard.vue' declara el prop 'album' i utilitza les dades determinades dins d'aquest per mostrar el títol, any de publicació i era al qual pertany. El component fill senzillament mostra les dades, no les modifica.

## Rutes

El menú utilitza 'RouterLink' i 'App.vue' mostra cada pàgina amb'RouterView'.

| Ruta | Pàgina | Contingut |
| --- | --- | --- |
| `/` | `Home.vue` | Presentació del grup |
| `/timeline` | `Timeline.vue` | Esdeveniments en la carrera del grup |
| `/albums` | `AlbumsAndEras.vue` | Àlbums que el grup ha tret al llarg de la seva carrera |
| `/skzoo` | `SKZOO.vue` | Presentació dels personatges de SKZOO |

'firebase.json' configura Firebase Hosting per a que funcionin enllaços i recàrregues.

## Firestore

La web utilitza la col·lecció de Firestore 'group.albums'. Cada document correspon a un àlbum i conté els camps 'title', 'year' i 'era'. La pàgina "Albums & Eras" llegeix aquestes dades i les mostra agrupades per era; dins de cada era, els àlbums s'ordenen cronològicament. Els documents sense era es mostren al grup "Otras eras".

## Enllaç a la web publicada

https://straykids-the-archive.web.app

https://straykids-the-archive.firebaseapp.com
