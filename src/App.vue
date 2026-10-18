<script setup>
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import './style.css';
</style>
