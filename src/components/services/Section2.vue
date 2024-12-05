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
                <img src="/src/assets/years4.png" alt="">
            </div>
            <div class="container-grid">
                <p class="secundary">Services</p>
                <h1>The Cleaning Your Home Deserves</h1>
                <p>At AllSet!, we specialize in giving you a spotless home
                    with services tailored to fit your lifestyle. Our
                    commitment to quality, trust, and punctuality makes us
                    your best choice for all your cleaning needs.</p>
                <span> Our Solutions:</span>
                <div class="container-flex">
                    <div class="cards" v-for="card in arraySolutions">
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
    font-size: 22px;
}

.container-grid h1 {
    margin: 0;
    font-size: 3em;
    font-family: 'Arial Black';
    color: #3C394E;
}

.container-grid span {
    font-size: 20px;
    font-weight: bold;
    color: #669FF3;
}

.container-flex {
    margin-top: 40px;
    display: flex;
    gap: 10px;
}

.cards {
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
}

.cards img {
    width: 50px;
}

.cards h2 {
    margin: 0;
    font-size: 20px;
}

.cards p {
    margin: 0;
    font-size: 14px;
}

.secundary {
    text-align: center;
    width: 8em;
    height: 1.2em;
    padding: 10px;
    color: #3C394E;
    font-size: 16px !important;
    background-color: #669FF3;
    border-radius: 10px;
}
</style>