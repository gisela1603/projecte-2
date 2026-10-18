<script setup>
defineOptions({ name: 'HomeView' })

const members = [
  {
    name: 'Bang Chan',
    image: '/images/members/bang-chan.jpg',
    height: 1037,
  },
  {
    name: 'Lee Know',
    image: '/images/members/lee-know.png',
    height: 1314,
  },
  {
    name: 'Changbin',
    image: '/images/members/changbin.png',
    height: 1394,
  },
  {
    name: 'Hyunjin',
    image: '/images/members/hyunjin.png',
    height: 1442,
  },
  {
    name: 'HAN',
    image: '/images/members/han.png',
    height: 1392,
  },
  {
    name: 'Felix',
    image: '/images/members/felix.png',
    height: 1411,
  },
  {
    name: 'Seungmin',
    image: '/images/members/seungmin.png',
    height: 1304,
  },
  {
    name: 'I.N',
    image: '/images/members/i-n.png',
    height: 1303,
  },
]
</script>

<template>
  <section class="page home-page">
    <h1>Stray Kids: The Archive</h1>
    <p class="home-tagline">Stray Kids everywhere all around the world</p>
    <figure class="home-group-photo">
      <img
        src="/images/stray-kids-group.jpg"
        alt="Fotografía de los ocho miembros de Stray Kids"
        width="1075"
        height="768"
      >
    </figure>
    <p class="home-description">
      Stray Kids es un grupo surcoreano de K-pop formado por Bang Chan, Lee Know, Changbin, Hyunjin,
      Han, Felix, Seungmin e I.N. Debutó en 2018 bajo JYP Entertainment y destaca por participar
      activamente en la composición y producción de sus canciones, especialmente a través de
      3RACHA, el equipo formado por Bang Chan, Changbin y Han. Su música mezcla géneros como el
      hip-hop, la electrónica y el pop, y sus seguidores son conocidos como STAY.
    </p>
    <section class="member-section" aria-labelledby="members-title">
      <div class="section-label">
        <h2 id="members-title">Miembros</h2>
      </div>
      <div class="grid member-grid uniform-card-grid">
        <article v-for="member in members" :key="member.name" class="card member-card">
          <img
            class="member-photo"
            :src="member.image"
            :alt="`Fotografía de ${member.name}, miembro de Stray Kids`"
            width="960"
            :height="member.height"
            loading="lazy"
          >
          <h3>{{ member.name }}</h3>
        </article>
      </div>
    </section>
  </section>
</template>
