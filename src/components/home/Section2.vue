<script setup>
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
            <div data-aos="flip-up" class="cards" v-for="card in arrayCards">
                <img :src="card.img" alt="">
                <h2>{{ card.titulo }}</h2>
                <p>{{ card.descripcion }}</p>
            </div>
        </div>
        <div class="container">
            <div data-aos="fade-right" class="container-flex">
                <img class="img-year" src="/src/assets/years.png" alt="">
            </div>
            <div data-aos="fade-left" class="container-grid">
                <p class="secundary">About Us</p>
                <h1>We Wake Places Clean & Bright</h1>
                <p>At Allset, we’re dedicated to transforming your living and
                    working spaces into pristine havens. With years of
                    experience and a passion for cleanliness, we strive to
                    exceed your expectations every time.</p>

                <div data-aos="fade-up" class="container-cards-transparentes">
                    <div v-for="(card, index) in arrayCardsTransparent" :key="index">
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
    translate: 0 -6vmax;
}

.cards img {
    width: 50px;
}

.cards h2 {
    font-size: 1.6vmax;
    margin: 0;
}

.cards p {
    font-size: 1.1vmax;
}

.container {
    display: grid;
    grid-template-areas: "der izq";
    grid-template-columns: 1fr 1fr;
    align-items: center;
}

.container-grid {
    grid-area: izq;
    display: grid;
}

.container-grid h1 {
    line-height: 1;
    font-size: 3vmax;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container-grid p {
    font-size: 1.5vmax;
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
    font-size: 2.2vmax;
    margin: 0;
    font-family: 'Arial Black', serif;
    color: #669FF3;
}

.container-cards-transparentes span {
    font-size: 1.1vmax;
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
    grid-area: der;
    display: flex;
    width: 100%;
    position: relative;
    justify-content: left;
    align-items: center;
}

.img-year {
    width: 75%;
}



@media screen and (max-width: 1024px) {}

@media  (max-width: 768px) {
    .main {
        padding: 5%;
    }

    .container-flotante {
        grid-template-columns: none;
    }

    .container {
        grid-template-columns: none;
        grid-template-areas: "izq" "der";
    }

    .container-grid {
        text-align: center;
        padding-bottom: 1.5vmax;
    }

    .container-grid h1 {
        font-size: 3vmax;
    }

    .container-grid p {
        font-size: 2vmax;
    }

    .container-cards-transparentes h3 {
        font-size: 3vmax;
    }

    .container-cards-transparentes span {
        font-size: 1.5vmax;
    }

    .cards {
        text-align: center;
        translate: 0 0;
        padding: 3vmax;
    }

    .cards img {
        width: 6vmax;
    }

    .cards h2 {
        font-size: 4vmax;
    }

    .cards p {
        font-size: 2.2vmax;
    }

    .container-flex{
        justify-content: center;
    }
}
</style>