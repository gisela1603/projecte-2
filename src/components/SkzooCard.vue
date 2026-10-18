<script setup>
defineProps({
  character: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="card">
    <img
      v-if="character.image"
      class="skzoo-card-image"
      :src="character.image"
      :alt="`Ilustración de ${character.name}`"
      width="530"
      height="412"
    >
    <h2>{{ character.name }}</h2>
    <p>Miembro: {{ character.member }}</p>
    <p>Animal: {{ character.animal }}</p>
  </article>
</template>
