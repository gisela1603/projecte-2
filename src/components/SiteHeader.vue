<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <strong>Stray Kids</strong>
    <nav aria-label="Navegación principal">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/timeline">Historia</RouterLink>
      <RouterLink to="/albums">Álbumes y eras</RouterLink>
      <RouterLink to="/skzoo">SKZOO</RouterLink>
    </nav>
  </header>
</template>
