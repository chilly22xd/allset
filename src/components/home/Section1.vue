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
                    <div data-aos="fade-up" class="cards" v-for="card in cantidades">
                        <div>
                            <span class="cant-front">{{ card.cant }}+</span>
                            <span class="cant-back">{{ card.cant }}+</span>
                        </div>
                        <span class="text">{{ card.descripcion }}</span>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up-left" class="container-img">
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
    margin-bottom: 1vmax;
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
    width: 50vmax;
}

.container-grid {
    position: relative;
    display: grid;
    justify-content: left;
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
    grid-template-columns: repeat(2, 1fr);
    justify-content: left;
    margin-top: 2.5vmax;
}

.cards {
    width: 14vmax;
    background-color: white;
    opacity: 0.8;
    border-radius: 20px;
    padding: 1vmax;
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

@media screen and (max-width: 1024px) {
    .main {
        margin: 0;
        padding: 0;
    }

    .container {
        grid-template-columns: none;
    }

    .container h1 {
        font-size: 3vmax;
        text-align: center;
    }

    .container p {
        font-size: 1.8vmax;
        text-align: center;
    }

    .container-grid {
        padding: 0;
        align-items: center;
    }

    .btn-escoba {
        width: 20vmax;
        height: 5vmax;
        font-size: 1.5vmax;
        gap: 2vmax;
    }

    .container-flex {
        justify-content: center;
    }

    .container-cards {
        grid-template-columns: repeat(2, 20vmax);
        justify-content: center;
    }

}

@media (max-width: 768px) {
    .main {
        margin: 1vmax 0 0 0;
        padding: 0;
    }

    .container {
        text-align: center;
    }

    .container h1 {
        font-size: 3vmax;
    }

    .container p {
        font-size: 2vmax;
    }

    .container-img img {
        width: 40vmax;
    }

    .container-grid {
        padding: 0 2vmax;
    }

    .btn-escoba {
        width: 25vmax;
        height: 8vmax;
        gap: 1.5vmax;
        font-size: 1.8vmax;
    }

    .btn-escoba img {
        width: 8vmax;
        height: 8vmax;
    }

    .container-cards {
        display: none;
    }
}
</style>