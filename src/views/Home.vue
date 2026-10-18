<script setup>
import { RouterLink } from 'vue-router'

defineOptions({ name: 'HomeView' })
</script>

<template>
  <section class="page">
    <p>HISTORIA · ÁLBUMES · SKZOO</p>
    <h1>Stray Kids</h1>
    <p>
      Un recorrido por la historia del grupo, sus álbumes y eras, y los personajes SKZOO.
    </p>
    <p>
      <RouterLink to="/timeline">Historia</RouterLink> |
      <RouterLink to="/albums">Álbumes y eras</RouterLink> |
      <RouterLink to="/skzoo">SKZOO</RouterLink>
    </p>
  </section>
</template>
