<script setup>
defineProps({
  album: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="card">
    <h2>{{ album.title }}</h2>
    <p>Año: {{ album.year }}</p>
    <p>Era: {{ album.era }}</p>
    <p v-if="album.description">{{ album.description }}</p>
  </article>
</template>
