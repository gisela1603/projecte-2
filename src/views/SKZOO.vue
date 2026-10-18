<script setup>
import SkzooCard from '../components/SkzooCard.vue'

const characters = [
  { name: 'Wolf Chan', member: 'Bang Chan', animal: 'Lobo', image: '/images/wolfchan.png' },
  { name: 'Leebit', member: 'Lee Know', animal: 'Conejo', image: '/images/leebit.png' },
  { name: 'DWAEKKI', member: 'Changbin', animal: 'Cerdo-conejo', image: '/images/dwaekki.png' },
  { name: 'Jiniret', member: 'Hyunjin', animal: 'Hurón', image: '/images/jiniret.png' },
  { name: 'HAN QUOKKA', member: 'HAN', animal: 'Quokka', image: '/images/hanquokka.png' },
  { name: 'BbokAri', member: 'Felix', animal: 'Pollito', image: '/images/bbokari.png' },
  { name: 'PuppyM', member: 'Seungmin', animal: 'Perro', image: '/images/puppym.png' },
  { name: 'FoxI.Ny', member: 'I.N', animal: 'Zorro fénec', image: '/images/foxiny.png' },
]
</script>

<template>
  <section class="page">
    <h1>SKZOO</h1>
    <p>Los personajes inspirados en los miembros de Stray Kids.</p>
    <figure class="skzoo-banner">
      <img
        src="/images/skzoo-characters.png"
        alt="Ilustración de los ocho personajes SKZOO juntos"
        width="1364"
        height="768"
      >
    </figure>
    <div class="grid">
      <SkzooCard
        v-for="character in characters"
        :key="character.name"
        :character="character"
      />
    </div>
  </section>
</template>
