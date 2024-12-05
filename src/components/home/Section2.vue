<script setup>
import { RouterLink } from 'vue-router';

const arrayCards = [
    {
        img: '../allset/icono-team.png',
        titulo: 'Expert Team',
        descripcion: 'Our highly trained professionals\n' +
            'bring a wealth of experience'

    },
    {
        img: '../allset/icono-aspiradora.png',
        titulo: 'Quality Service',
        descripcion: 'We guarantee a spotless finish that\n' +
            'exceeds your expectations.'

    },
    {
        img: '/allset/icono-sticker.png',
        titulo: 'Affordable Price',
        descripcion: 'We offer exceptional services at\n' +
            'prices that are affordable for\n' +
            'everyone.'

    }
];
const arrayCardsTransparent = [
    {
        cant: 1000,
        subtitule: 'Projects Completed'
    },
    {
        cant: 123,
        subtitule: 'Expert Cleaners'
    },
    {
        cant: 400,
        subtitule: 'Repeat Clients'
    }
];
</script>
<template>
    <div class="main"><!-- main -->
        <div class="container-flotante"><!-- cards flotantes -->
            <div class="cards" v-for="card in arrayCards">
                <img :src="card.img" alt="">
                <h2>{{ card.titulo }}</h2>
                <p>{{ card.descripcion }}</p>
            </div>
        </div>
        <div class="container">
            <div class="container-flex">
                <img class="img-year" src="/src/assets/years.png" alt="">
            </div>
            <div class="container-grid">
                <p class="secundary">About Us</p>
                <h1>We Wake Places Clean & Bright</h1>
                <p>At Allset, we’re dedicated to transforming your living and
                    working spaces into pristine havens. With years of
                    experience and a passion for cleanliness, we strive to
                    exceed your expectations every time.</p>

                <div class="container-cards-transparentes">
                    <div v-for="card in arrayCardsTransparent">
                        <h3>{{ card.cant }}+</h3>
                        <span>{{ card.subtitule }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding-bottom: 12%;
    padding-left: 11%;
    padding-right: 11%;
}

.container-flotante {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: 20px;
}

.cards {
    background-color: white;
    opacity: 0.8;
    border-radius: 20px;
    padding: 10%;
    position: relative;
    translate: 0 -45%;
}

.cards img {
    width: 50px;
}

.cards h2 {
    margin: 0;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}

.container-grid {
    display: grid;
}

.container-grid h1 {
    font-size: 3em;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container-grid p {
    font-size: 22px;
}

.container-cards-transparentes {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
}

.container-cards-transparentes div {
    padding: 5%;
}

.container-cards-transparentes h3 {
    font-size: 2em;
    margin: 0;
    font-family: 'Arial Black', serif;
    color: #669FF3;
}

.secundary {
    display: flex;
    text-decoration: none;
    width: 8em;
    height: 1.2em;
    padding: 10px;
    color: #3C394E;
    font-size: 16px !important;
    background-color: #DCE6ff;
    border-radius: 10px;
    justify-content: center;
}

.container-flex {
    display: flex;
    width: 100%;
    position: relative;
    justify-content: left;
    align-items: center;
}

.img-year {
    width: 75%;
}
</style>