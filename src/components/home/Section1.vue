<script setup>
const masServicios = "our services";
const cantidadHappy = 800;
const cantidadAwards = 180;

const cantidades = [
    {
        cant: cantidadHappy,
        descripcion: 'Happy Clients'
    },
    {
        cant: cantidadAwards,
        descripcion: 'Awards Receive'
    }
];
</script>

<template>
    <div class="main"><!-- main -->
        <div class="container">
            <div class="container-grid">
                <h1 data-aos="fade-right">Feel Your Way For Freshness</h1>
                <p>Experience the epitome of cleanliness with Allset.
                    We provide top-notch cleaning services tailored to
                    your needs, ensuring your spaces shine with perfection</p>
                <router-link to="" class="btn-escoba">
                    <span>{{ masServicios.toUpperCase() }}</span>
                    <img src="/escoba.png" alt="">
                </router-link>
                <div class="container-cards">
                    <div class="cards" v-for="card in cantidades">
                        <div>
                            <span class="cant-front">{{ card.cant }}+</span>
                            <span class="cant-back">{{ card.cant }}+</span>
                        </div>
                        <span>{{ card.descripcion }}</span>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" class="container-img">
                <img src="/header.png" alt="allClean">
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding-bottom: 8%;
    margin-left: 11%;
}

.container {
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
}

.container h1 {
    font-size: 3em;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container p {
    font-size: 22px;
    margin: 0;
}

.container-img {
    display: flex;
    justify-content: right;
}

.container-img img {
    width: 90%;
}

.container-grid {
    position: relative;
    display: grid;
    justify-content: left;
}

.btn-escoba {
    width: 13em;
    height: 4em;
    margin-top: 20px;
    display: flex;
    gap: 10px;
    background-color: #669FF3;
    border-radius: 30em;
    justify-content: right;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.btn-escoba img {
    width: 60px;
}

.container-cards {
    display: grid;
    gap: 10px;
    padding: 0;
    grid-template-columns: 40% 40% 20%;
    justify-content: left;
    margin-top: 2.5vmax;
}

.cards {
    background-color: white;
    opacity: 0.8;
    border-radius: 20px;
    padding: 1.5vmax;
}

.cant-front {
    position: relative;
    font-size: 3em;
    font-weight: bold;
    color: #669FF3;
}

.cant-back {
    position: absolute;
    font-size: 5em;
    font-weight: bold;
    color: #669FF3;
    opacity: 0.2;
    translate: -110px -30px;
}

@media screen and (max-width: 480px) {
    .container h1 {
        font-size: 1em;
    }

    .container p {
        font-size: 14px;
    }

    .container-grid {
        margin: 0;
        grid-template-rows: 1fr;
        gap: 5px;
    }

    .btn-escoba {
        width: 10em;
        font-size: 1em;
        margin-top: 10px;
    }

    .btn-escoba img {
        width: 40px;
    }
}
</style>