<script setup>
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
            <div class="container-img">
                <img data-aos="fade-up-left" src="/header.png">
            </div>
            <div data-aos="fade-right" class="container-grid">
                <h1>Feel Your Way For Freshness</h1>
                <p>Experience the epitome of cleanliness with Allset. We provide top-notch cleaning services tailored to your needs, ensuring your spaces shine with perfection</p>
                <div class="container-justify">
                    <router-link class="btn-escoba" to="/allset/services">
                        <p>OUR SERVICES</p><img src="/escoba.png">
                    </router-link>
                </div>
                <div class="container-cards">
                    <div data-aos="fade-up" class="cards" v-for="cards in cantidades">
                        <div>
                            <span class="front">{{ cards.cant }}+</span>
                            <span class="back">{{ cards.cant }}+</span>
                        </div>
                        <p>{{ cards.descripcion }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    padding-left: 11.5%;
    padding-bottom: 7rem;
}
.container {
    grid-template-columns: 0.7fr 1fr;
    grid-template-areas: "container-grid container-img";
}
.container-cards {
    display: flex;
    gap: 1rem;
}
.cards {
    position: relative;
    padding: 0.5rem 3rem;
    border-radius: 20px;
    background-color: white;
}
.cards .front {
    color: #669FF3;
    position: absolute;
    font-size: 3.5rem;
    font-weight: bold;
    top: 0;
    left: 0;
    translate: 3rem 3rem;
}
.back {
    font-size: 5rem;
    font-weight: bold;
    color: #669FF3;
    opacity: 0.4;
}
.btn-escoba {
    margin: 0;
    width: 16rem;
    height: 4rem;
    border-radius: 30rem;
    background-color: #669FF3;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
}
.btn-escoba > p {
    font-size: 1rem;
    color: white;
    font-weight: bold;
}
.btn-escoba > img {
    width: 4rem;
}
.container-img {
    align-items: baseline;
}
.container-img > img {
    width: 100%;
}

@media (max-width: 768px) {
    .main {
        padding: 1.5rem 0;
    }
    .container {
        grid-template-columns: none;
        grid-template-areas: "container-grid" "container-img";
    }
    .container-grid > h1 {
        padding: 0 5%;
    }
    .container-grid > p {
        padding: 0 5%;
    }
    .container-justify{
        justify-content: center;
    }
    .container-cards {
        display: none;
    }
    .container-img {
        justify-content: right;
    }
    .container-img > img {
        width: 85%;
    }

}
</style>