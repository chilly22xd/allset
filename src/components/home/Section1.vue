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
                <p data-aos="fade-right">Experience the epitome of cleanliness with Allset.
                    We provide top-notch cleaning services tailored to
                    your needs, ensuring your spaces shine with perfection</p>
                <div class="container-flex">
                    <router-link data-aos="fade-right" to="/allset/services" class="btn-escoba">
                        <span>{{ masServicios.toUpperCase() }}</span>
                        <img src="/escoba.png" alt="">
                    </router-link>
                </div>
                <div class="container-cards">
                    <div data-aos="fade-up" class="cards" v-for="(card,index) in cantidades" >
                        <div>
                            <span class="cant-front">{{ card.cant }}+</span>
                            <span class="cant-back">{{ card.cant }}+</span>
                        </div>
                        <span class="text">{{ card.descripcion }}</span>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up-left" class="container-img">
                <img id="header-pc" src="/header.png" alt="allClean">
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
    grid-template-columns: 0.7fr 1fr;
    align-items: center;
    margin-bottom: 1vmax;
    gap: 2vmax;
}

.container h1 {
    line-height: 1;
    font-size: 3vmax;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container p {
    font-size: 1.5vmax;
    margin: 1vmax 0 0 0;
}

.container-img {
    display: flex;
    justify-content: right;
}

.container-img img {
    width: 95%;
}

.container-grid {
    position: relative;
    display: grid;
    align-items: center;
    gap: 2vmax;
}

.btn-escoba {
    width: 15vmax;
    height: 4.2vmax;
    margin-top: 2vmax;
    display: flex;
    gap: 10px;
    background-color: #669FF3;
    border-radius: 30em;
    justify-content: right;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1vmax;
}

.btn-escoba img {
    width: 4.5vmax;
}

.container-cards {
    display: grid;
    padding: 0;
    gap: 2vmax;
    grid-template-columns: repeat(2, 1fr);
    justify-content: left;
    margin-top: 1vmax;
}

.cards {
    background-color: white;
    opacity: 0.8;
    border-radius: 20px;
    padding: 1vmax;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.cant-front {
    position: absolute;
    font-size: 4vmax;
    font-weight: bold;
    color: #669FF3;
    translate: 0.5vmax 2vmax;
}

.cant-back {
    position: relative;
    font-size: 6vmax;
    font-weight: bold;
    color: #669FF3;
    opacity: 0.2;
}

.cards .text {
    font-size: 1.2vmax;
}

.container-flex {
    display: flex;
}

@media screen and (max-width: 768px) {
    .main {
        width: 100%;

    }
    .container-img {
        justify-content: right;
    }
    .container-img img {
        width: 75%;
    }
    .container {
        grid-template-columns: none;
        grid-template-rows: auto auto;
    }
    .container-grid {
        gap: 3vmax;
    }
    .container-grid h1 {
        font-size: 3vmax;
        text-align: center;
    }
    .container-grid p {
        font-size: 2vmax;
        text-align: center;
    }
    .container-flex {
        justify-content: center;
    }
    .btn-escoba {
        width: 25vmax;
        height: 8vmax;
        font-size: 2vmax;
        gap: 0;
    }
    .btn-escoba img {
        width: 8vmax;
    }
    .container-cards {
        display: none;
    }


}
</style>