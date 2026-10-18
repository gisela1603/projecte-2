# Stray Kids fan guide

Web fan no oficial sobre la historia de Stray Kids, sus álbumes y eras, y SKZOO.
Está creada con Vue 3, Vue Router y Cloud Firestore.

## Instalar y ejecutar

Necesitas Node.js 22.18 o posterior y npm.

```sh
npm install
cp .env.example .env.local
npm run dev
```

Completa `.env.local` con la configuración de tu aplicación web de Firebase. En Firebase Console,
crea Firestore y una colección llamada `albums`. Cada documento debe tener estos campos:

| Campo | Tipo | Ejemplo |
| --- | --- | --- |
| `title` | texto | `ATE` |
| `year` | número | `2024` |
| `era` | texto | `ATE era` |
| `description` | texto | `Miniálbum publicado en julio de 2024.` |
| `coverUrl` | texto (opcional) | URL de una imagen de portada |

Si añades `coverUrl`, la tarjeta mostrará esa portada. Si falta, se mostrará una portada del
catálogo de Apple Music para los álbumes reconocidos; al pulsarla, se abrirá su ficha en Apple Music.
Si no se puede cargar ninguna portada, se mostrará un marcador.

La configuración web de Firebase no es una clave privada. No añadas credenciales de cuentas de
servicio ni claves privadas al repositorio. `.env.local` está excluido por `.gitignore`.

## Componentes propios

- `SiteHeader.vue`: menú de navegación.
- `AlbumCard.vue`: muestra un álbum.
- `SkzooCard.vue`: muestra un personaje SKZOO.

`App.vue` es el componente raíz de la aplicación. Las páginas se encuentran en `src/views/`.

### Comunicación mediante props

`AlbumsAndEras.vue` es el padre: obtiene los álbumes de Firestore y pasa cada uno al componente hijo
`AlbumCard.vue`:

```vue
<AlbumCard v-for="album in albums" :key="album.id" :album="album" />
```

`AlbumCard.vue` declara la prop `album` con `defineProps` y usa sus datos para mostrar la portada,
el título, el año, la era y la descripción. El año y la era aparecen juntos. El componente hijo no
modifica esos datos.

## Rutas

El menú usa `RouterLink` y `App.vue` muestra cada página con `RouterView`.

| Ruta | Página | Contenido |
| --- | --- | --- |
| `/` | `Home.vue` | Presentación de la guía. |
| `/timeline` | `Timeline.vue` | Hitos de la historia del grupo. |
| `/albums` | `AlbumsAndEras.vue` | Álbumes y eras leídos de Firestore. |
| `/skzoo` | `SKZOO.vue` | Personajes SKZOO y miembros asociados. |

`firebase.json` configura Firebase Hosting para que funcionen los enlaces directos y las recargas.

## Firestore

La colección es `albums`. La página `AlbumsAndEras.vue` lee los campos `title`, `year`, `era`,
`description` y el campo opcional `coverUrl`, y pasa cada documento a `AlbumCard.vue`. La página
muestra estados de carga, error y colección vacía. `firestore.rules` permite leer esa colección y
deniega las escrituras desde la web.

Publica las reglas desde la carpeta del proyecto:

```sh
npm install --global firebase-tools
firebase login
firebase use --add
firebase deploy --only firestore:rules
```

## Compilar y publicar

```sh
npm run build
npm run preview
firebase deploy --only hosting
```

Al ejecutar `firebase use --add`, selecciona tu proyecto. Firebase mostrará la URL de la web al
terminar el despliegue. **URL publicada:** pendiente de configurar el proyecto Firebase y desplegar.
