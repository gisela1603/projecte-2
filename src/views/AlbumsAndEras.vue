<script setup>
import { onMounted, ref } from 'vue'
import AlbumCard from '../components/AlbumCard.vue'
import { getAlbums } from '../firebase'

const albums = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    albums.value = await getAlbums()
  } catch (err) {
    console.error('No se pudieron cargar los álbumes de Stray Kids:', err)
    error.value = 'No se pudo cargar la discografía de Stray Kids. Inténtalo de nuevo más tarde.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="page interior-page">
    <section class="page-heading">
      <p class="eyebrow">THE DISCOGRAPHY / 002</p>
      <h1>Albums <span class="heading-amp">&</span><br>Eras<span class="heading-period">.</span></h1>
      <p class="page-lede">
        Cada álbum abre una nueva era en el recorrido musical de Stray Kids.
      </p>
    </section>

    <section class="album-section" aria-labelledby="album-list-title">
      <div class="section-label">
        <h2 id="album-list-title">Álbumes de Stray Kids</h2>
      </div>
      <p v-if="loading" class="status-message" role="status">Cargando la discografía de Stray Kids…</p>
      <p v-else-if="error" class="status-message status-error" role="alert">{{ error }}</p>
      <p v-else-if="albums.length === 0" class="status-message">
        Aún no hay álbumes de Stray Kids para mostrar.
      </p>
      <div v-else class="grid album-grid">
        <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
      </div>
    </section>
  </div>
</template>
