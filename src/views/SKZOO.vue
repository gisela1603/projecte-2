<script setup>
import SkzooCard from '../components/SkzooCard.vue'

const characters = [
  { name: 'Wolf Chan', member: 'Bang Chan', animal: 'Lobo' },
  { name: 'Leebit', member: 'Lee Know', animal: 'Conejo' },
  { name: 'DWAEKKI', member: 'Changbin', animal: 'Cerdo-conejo' },
  { name: 'Jiniret', member: 'Hyunjin', animal: 'Hurón' },
  { name: 'HAN QUOKKA', member: 'HAN', animal: 'Quokka' },
  { name: 'BbokAri', member: 'Felix', animal: 'Pollito' },
  { name: 'PuppyM', member: 'Seungmin', animal: 'Perro' },
  { name: 'FoxI.Ny', member: 'I.N', animal: 'Zorro fénec' },
]
</script>

<template>
  <section class="page">
    <h1>SKZOO</h1>
    <p>Los personajes inspirados en los miembros de Stray Kids.</p>
    <div class="grid">
      <SkzooCard
        v-for="character in characters"
        :key="character.name"
        :character="character"
      />
    </div>
  </section>
</template>
