<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  album: {
    type: Object,
    required: true,
  },
})

const imageFailed = ref(false)

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

const coverUrl = computed(() =>
  typeof props.album.coverUrl === 'string' ? props.album.coverUrl.trim() : '',
)

const details = computed(() =>
  [props.album.year, props.album.era].filter((value) => value !== undefined && value !== null && value !== '').join(' · '),
)
</script>

<template>
  <article class="card album-card" :style="cardStyle">
    <div class="album-cover">
      <img
        v-if="coverUrl && !imageFailed"
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
