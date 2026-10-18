<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <strong>Stray Kids: The Archive</strong>
    <nav aria-label="Navegación principal">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/timeline">Historia</RouterLink>
      <RouterLink to="/albums">Albums &amp; Eras</RouterLink>
      <RouterLink to="/skzoo">SKZOO</RouterLink>
    </nav>
  </header>
</template>
