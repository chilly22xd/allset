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
        img: '../allset/icono-sticker.png',
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
    <div class="main hidden"><!-- main -->
        <div class="container">
            <div class="container-flotante"><!-- cards flotantes -->
                <div data-aos="flip-up" class="cards" v-for="card in arrayCards">
                    <img :src="card.img" alt="">
                    <h2>{{ card.titulo }}</h2>
                    <p>{{ card.descripcion }}</p>
                </div>
            </div>
            <div data-aos="fade-right" class="container-img">
                <img class="img-year" src="/src/assets/years.png" alt="">
            </div>
            <div data-aos="fade-left" class="container-grid">
                <div class="container-secundary">
                    <p class="secundary">About Us</p>
                </div>
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
    padding: 0 11.5% 8rem 11.5%;
}

.cards {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 2rem;
    translate: 0 -4rem;
}

.container {
    grid-template-areas:"container-flotante container-flotante" "container-img container-grid";
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.secundary {
    font-size: 1.2rem;
}

.container-img {
    align-items: center;
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

.img-year {
    width: 75%;
}


@media (max-width: 768px) {
    .main {
        padding: 1rem 5%;
    }
    .container-flotante {
        padding: 0 6%;
    }
    .container {
        grid-template-columns: none;
        grid-template-areas: "container-flotante" "container-grid" "container-img";
    }


    .container-img {
        justify-content: center;
    }

    .container-cards-transparentes {
        align-items: start;
    }

    .container-cards-transparentes h3 {
        font-size: 3vmax;
    }

    .container-cards-transparentes span {
        font-size: 1.5vmax;
    }

    .cards {
        align-items: center;
        text-align: center;
        translate: none;
        padding: 1rem;
    }

    .cards img {
        width: 50px;
        height: 50px;
    }

    .cards h2 {
        font-size: 1.5rem;
    }

    .cards p {
        font-size: 0.9rem;
    }

    .container-flex{
        justify-content: center;
    }
}
</style>