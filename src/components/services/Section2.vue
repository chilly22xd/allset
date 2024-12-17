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
    <div class="main hidden">
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
    padding: 2rem 11.5%;
    background-color: rgb(212, 229, 252);
}

.container {
    grid-template-areas: "container-img container-grid" ;
}
.container-img {
    display: flex;
    justify-content: left;
    align-items: center;
}

.container-img img {
    width: 90%;
}


.container-grid span {
    font-size: 1.4vmax;
    font-weight: bold;
    color: #669FF3;
}

.cards {
    padding: 1rem;
}
.cards > h2 {
    font-size: 1.5rem;
}
.cards > p {
    text-align: center

;
}
.container-flex {
    display: flex;
    gap: 1vmax;
}

.cards > p {
    margin: 0;
}
.secundary {
    background: #669FF3;
    padding: 8px 1.5vmax;
    border-radius: 10px;
    color: #3C394E;
    font-size: 1.5vmax;
}

@media (max-width: 768px) {
    .main {
        padding: 5%;
    }

    .container {
        grid-template-columns: none;
        grid-template-areas: "container-grid";
    }
    .cards {
        align-items: center;
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
        align-items: center;
        flex-direction: column;
        padding: 0 5%;
    }

    .cards {
        padding: 5%;
    }

    .cards img {
        width: 8vmax;
        height: 8vmax;
    }

    .cards h2 {
        font-size: 2.5vmax;
    }

}
</style>