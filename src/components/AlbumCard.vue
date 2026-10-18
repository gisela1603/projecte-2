<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  album: {
    type: Object,
    required: true,
  },
})

const imageFailed = ref(false)

const officialAlbumArtwork = {
  hellevator: {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/31/26/5e/31265eb4-5e8b-3aa3-b42a-9702b13529aa/straykids-COVER-F.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/hellevator-single/1304823357',
  },
  mixtape: {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/25/72/52/2572525f-0b81-ff36-d430-6559309e4c8d/SKZ-MIXTAPE-Final.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/mixtape/1332554816',
  },
  'i am not': {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7b/f7/e0/7bf7e097-ca8a-fadf-28b6-4eb68e574ce8/SKZ-COVER-F.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/i-am-not/1363844957',
  },
  'i am who': {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/31/3f/5d/313f5d63-c48d-aa56-0846-c3b7dae8ff68/738676857061.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/i-am-who/1422557536',
  },
  'i am you': {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/e3/75/11/e37511af-3154-d327-d4be-6cf13cea5767/738676857108.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/i-am-you/1439566881',
  },
  'clé 1: miroh': {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d0/71/ea/d071eabb-b298-9715-5688-227c63345120/SKZ_online_cover.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/cl%C3%A9-1-miroh/1457175505',
  },
  'clé 2: yellow wood': {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e9/75/0c/e9750c8a-c26e-2b29-10a1-133cd2252d95/SKZ_Yellow_Wood_Cover.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/cl%C3%A9-2-yellow-wood/1468259726',
  },
  'clé 3: levanter': {
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/74/ee/6e/74ee6eec-8dfa-2f41-f819-25e0bc6a5fbd/SKZ_LEVANTER.jpg/600x600bb.jpg',
    albumUrl: 'https://music.apple.com/kr/album/cl%C3%A9-levanter/1490692960',
  },
}

const albumPalettes = [
  { match: 'do it', accent: '#f2b8cf' },
  { match: 'karma', accent: '#a8bce7' },
  { match: '5-star', accent: '#e8c774' },
  { match: 'rock-star', accent: '#ff7c86' },
  { match: 'maxident', accent: '#f2a9c5' },
  { match: 'oddinary', accent: '#c6a9ed' },
  { match: 'noeasy', accent: '#e6d879' },
  { match: 'miroh', accent: '#f07852' },
  { match: 'yellow wood', accent: '#edcd83' },
  { match: 'levanter', accent: '#a7d6ee' },
  { match: 'go live', accent: '#f07852' },
  { match: 'i am not', accent: '#d6d1d0' },
  { match: 'i am who', accent: '#f2c66d' },
  { match: 'i am you', accent: '#ed9ca7' },
  { match: 'mixtape', accent: '#c2b9c9' },
  { match: 'hellevator', accent: '#d6d1d0' },
]

const palette = computed(() => {
  const name = `${props.album.title ?? ''} ${props.album.era ?? ''}`.toLowerCase()
  return albumPalettes.find(({ match }) => name.includes(match)) ?? {
    accent: '#ff8fa3',
  }
})

const cardStyle = computed(() => ({
  '--album-accent': palette.value.accent,
}))

const defaultArtwork = computed(() => {
  const title = typeof props.album.title === 'string' ? props.album.title.trim().toLowerCase() : ''
  return officialAlbumArtwork[title]
})

const coverUrl = computed(() => {
  const customCover = typeof props.album.coverUrl === 'string' ? props.album.coverUrl.trim() : ''
  return customCover || defaultArtwork.value?.coverUrl || ''
})

const albumUrl = computed(() => {
  const customAlbumUrl = typeof props.album.albumUrl === 'string' ? props.album.albumUrl.trim() : ''
  return customAlbumUrl || defaultArtwork.value?.albumUrl || ''
})

const details = computed(() =>
  [props.album.year, props.album.era].filter((value) => value !== undefined && value !== null && value !== '').join(' · '),
)
</script>

<template>
  <article class="card album-card" :style="cardStyle">
    <div class="album-cover">
      <a
        v-if="coverUrl && albumUrl && !imageFailed"
        class="album-cover-link"
        :href="albumUrl"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Abrir ${album.title} en Apple Music (nueva pestaña)`"
      >
        <img
          :src="coverUrl"
          :alt="`Portada de ${album.title}`"
          loading="lazy"
          @error="imageFailed = true"
        >
      </a>
      <img
        v-else-if="coverUrl && !imageFailed"
        :src="coverUrl"
        :alt="`Portada de ${album.title}`"
        loading="lazy"
        @error="imageFailed = true"
      >
      <div v-else class="album-cover-placeholder" aria-label="Portada no disponible">
        <span>{{ album.title?.slice(0, 1) ?? 'SKZ' }}</span>
        <small>Portada no disponible</small>
      </div>
    </div>
    <div class="album-card-details">
      <h2>{{ album.title }}</h2>
      <p v-if="details" class="album-meta">{{ details }}</p>
      <p v-if="album.description">{{ album.description }}</p>
    </div>
  </article>
</template>
