<script setup>
import section1 from './home/Section1.vue';
import Section2 from './home/Section2.vue';
import Section3 from './home/Section3.vue';
import Section4 from './home/Section4.vue';
import Section5 from './home/Section5.vue';

const masServicios = "our services";
const cantidadHappy = 800;
const cantidadAwards = 180
const arrayCards = [
  {
    img: '/icono-team.png',
    titulo: 'Expert Team',
    descripcion: 'Our highly trained professionals\n' +
      'bring a wealth of experience'

  },
  {
    img: '/icono-aspiradora.png',
    titulo: 'Quality Service',
    descripcion: 'We guarantee a spotless finish that\n' +
      'exceeds your expectations.'

  },
  {
    img: '/icono-sticker.png',
    titulo: 'Affordable Price',
    descripcion: 'We offer exceptional services at\n' +
      'prices that are affordable for\n' +
      'everyone.'

  }
]

</script>

<template>
  <section1 />
  <section2 />
  <section3 />
  <section4 />
  <section5 />


</template>

<style scoped></style>