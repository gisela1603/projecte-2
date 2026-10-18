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
    <h2>{{ character.name }}</h2>
    <p>Miembro: {{ character.member }}</p>
    <p>Animal: {{ character.animal }}</p>
  </article>
</template>
