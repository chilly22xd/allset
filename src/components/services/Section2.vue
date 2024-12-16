<script setup>
const arraySolutions = [
    {
        icon: "/allset/casa.png",
        titulo: "General Cleaning",
        desc: "Perfect for keeping your home clean and organized, with options for standard or deep cleaning based on your needs."
    },
    {
        icon: "/allset/mudanza.png",
        titulo: "General Cleaning",
        desc: "Perfect for keeping your home clean and organized, with options for standard or deep cleaning based on your needs."
    }
];
</script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-img">
                <img data-aos="fade-right" src="/src/assets/years4.png" alt="">
            </div>
            <div data-aos="fade-left" class="container-grid">
                <div class="container-secundary">
                    <p class="secundary">Services</p>
                </div>
                <h1>The Cleaning Your Home Deserves</h1>
                <p>At AllSet!, we specialize in giving you a spotless home
                    with services tailored to fit your lifestyle. Our
                    commitment to quality, trust, and punctuality makes us
                    your best choice for all your cleaning needs.</p>
                <span> Our Solutions:</span>
                <div class="container-flex">
                    <div data-aos="fade-up" class="cards" v-for="card in arraySolutions">
                        <img :src="card.icon" alt="">
                        <h2>{{ card.titulo }}</h2>
                        <p>{{ card.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    padding: 2% 11% 2% 11%;
    background-color: rgb(212, 229, 252);
}

.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.container-img {
    display: flex;
    justify-content: left;
    align-items: center;
}

.container-img img {
    width: 90%;
}

.container-grid {
    display: grid;
}

.container-grid p {
    font-size: 1.5vmax;
}

.container-grid h1 {
    line-height: 1;
    margin: 0;
    font-size: 3vmax;
    font-family: 'Arial Black', serif;
    color: #3C394E;
}

.container-grid span {
    font-size: 1.4vmax;
    font-weight: bold;
    color: #669FF3;
}

.container-flex {
    margin-top: 4vmax;
    display: flex;
    gap: 10px;
}

.cards {
    width: 16vmax;
    padding: 1.5vmax;
    background-color: white;
    border-radius: 20px;
}

.cards img {
    width: 50px;
}

.cards h2 {
    margin: 0;
    font-size: 1.3vmax;
}

.cards p {
    margin: 0;
    font-size: 1vmax;
}

.secundary {
    background-color: #669FF3;
    width: 8vmax;
    color: #3C394E;
    font-size: 1.2vmax !important;
    border-radius: 10px;
    text-align: center;
    align-content: center;
}

@media (max-width: 768px) {
    .main {
        padding: 5%;
    }

    .container {
        grid-template-columns: none;
    }

    .secundary {
        width: 15vmax;
        height: 4vmax;
        font-size: 2vmax !important;
        text-align: center;
        align-content: center;
    }

    .container-grid {
        text-align: center;
        gap: 2vmax;
    }

    .container-grid h1 {
        font-size: 3vmax;
    }

    .container-grid p {
        font-size: 2vmax;
    }

    .container-grid span {
        font-size: 2.2vmax;
    }

    .container-img {
        display: none;
    }

    .container-flex {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .cards {
        width: 70%;
        padding: 5% 8%;
    }

    .cards img {
        width: 7vmax;
        height: 7vmax;
    }

    .cards h2 {
        font-size: 2.5vmax;
    }

    .cards p {
        padding: 0 3vmax;
    }
}
</style>