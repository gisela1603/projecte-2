<script setup>
defineOptions({ name: 'TimelineView' })

const milestones = [
  {
    year: '2017',
    title: 'Stray Kids',
    description: 'Los miembros se dieron a conocer juntos en el programa de supervivencia Stray Kids.',
  },
  {
    year: '2018',
    title: 'Debut con I am NOT',
    description: 'Debut oficial el 25 de marzo de 2018 con la canción District 9.',
  },
  {
    year: '2019',
    title: 'La serie Clé',
    description: 'El grupo publicó Clé 1: MIROH, Clé 2: Yellow Wood y Clé: LEVANTER.',
  },
  {
    year: '2020',
    title: 'GO生 (GO LIVE)',
    description: 'Su primer álbum de estudio coreano incluyó la canción God’s Menu.',
  },
  {
    year: '2022',
    title: 'ODDINARY y MAXIDENT',
    description: 'Dos nuevos lanzamientos marcaron el recorrido del grupo.',
  },
  {
    year: '2023',
    title: '5-STAR',
    description: 'El tercer álbum de estudio coreano salió en junio de 2023.',
  },
  {
    year: '2024',
    title: 'ATE',
    description: 'El miniálbum ATE se publicó en julio de 2024.',
  },
]
</script>

<template>
  <section class="page">
    <h1>Historia de Stray Kids</h1>
    <article v-for="milestone in milestones" :key="milestone.year + milestone.title" class="card">
      <h2>{{ milestone.year }} — {{ milestone.title }}</h2>
      <p>{{ milestone.description }}</p>
    </article>
  </section>
</template>
