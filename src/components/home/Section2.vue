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
    <div class="main"><!-- main -->
        <div class="container">
            <div class="container-flotante"><!-- cards flotantes -->
                <div class="cards">
                    <img src="/icono-team.png" alt="">
                    <h2>Expert Team</h2>
                    <p>Our highly trained professionals bring a wealth of experience</p>
                </div>
                <div class="cards">
                    <img src="/icono-aspiradora.png" alt=""></img>
                    <h2>Quality Service</h2>
                    <p>We guarantee a spotless finish that exceeds your expectations.</p>
                </div>
                <div class="cards">
                    <img src="/icono-sticker.png" alt=""></img>
                    <h2>Affordable Price</h2>
                    <p>We offer exceptional services at prices that are affordable for everyone.</p>
                </div>
            </div>
            <div data-aos="fade-right" class="container-flex">
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
    padding-bottom: 12%;
    padding-left: 11%;
    padding-right: 11%;
}

.container-flotante {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1vmax;
    grid-area: arr;
}

.cards{
    padding: 10%;
    background-color: white;
    opacity: 0.8;
    border-radius: 20px;
    translate: 0 -5.5vmax;
}

.cards img {
    width: 3.5vmax;
    height: 3.5vmax;
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
    grid-template-areas: "arr arr" "der izq";
    grid-template-rows: auto;
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

@media screen and (max-width: 768px) {
    .main {
        padding: 8% 5% 3% 5%;
    }

    .container-flotante {
        padding: 0 4%;
        grid-template-columns: none;
        gap: 2vmax;
    }

    .container {
        grid-template-columns: none;
        grid-template-areas: "arr" "izq" "der";
    }

    .container-grid {
        text-align: center;
        align-items: center;
        padding-bottom: 1.5vmax;
        gap: 2vmax;
    }

    .container-grid h1 {
        font-size: 3vmax;
    }

    .container-grid p {
        font-size: 2vmax;
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
        text-align: center;
        justify-self: center;
        translate: none;
        padding: 5%;
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