<script setup>
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <footer class="site-footer">
    <p>YOU MAKE STRAY KIDS STAY</p>
  </footer>
</template>

<style>
@import './style.css';
</style>
