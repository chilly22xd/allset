<script setup>

const arrayTexts = [
    {
        icon: "/src/assets/2.png",
        titulo: "Call or Message Us",
        text: "Let us know the service you need and choose a convenient time for you."
    },
    {
        icon: "/src/assets/flecha.png"
    },
    {
        icon: "/src/assets/3.png",
        titulo: "Relax While We Work",
        text: "Our team will arrive on time, equipped with everything needed to make your space shine"
    },
    {
        icon: "/src/assets/flecha.png"
    },
    {
        icon: "/src/assets/4.png",
        titulo: "Enjoy Your Clean Home",
        text: "Come back to a sparkling space you'll love"
    }
];

</script>
<template>
    <div class="main">
        <div class="container">
            <h1 class="titulo">How It Works</h1>
            <h2 class="subtitulo">Everything made easier with Allset!</h2>
            <div class="container-grid">
                <div class="cards">
                    <div>
                        <img class="nums" src="/src/assets/2.png" alt="">
                    </div>
                    <h2>Call or Message Us</h2>
                    <p>Let us know the service you need and choose a convenient time for you.</p>
                </div>
                <div class="cards"><img class="arrows" src="/src/assets/flecha.png" alt=""></div>
                <div class="cards">
                    <div>
                        <img class="nums" src="/src/assets/3.png" alt="">
                    </div>
                    <h2>Relax While We Work</h2>
                    <p>Our team will arrive on time, equipped with everything needed to make your space shine</p>
                </div>
                <div class="cards"><img class="arrows" src="/src/assets/flecha.png" alt=""></div>
                <div class="cards">
                    <div>
                        <img class="nums" src="/src/assets/4.png" alt="">
                    </div>
                    <h2>Enjoy Your Clean Home</h2>
                    <p>Come back to a sparkling space you'll love</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    padding: 5% 15% 5% 15%;
    background-color: rgb(212, 229, 252);
}

.container {
    display: grid;
    align-items: center;
}

.container .titulo {
    font-size: 3em;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
    text-align: center;
}

.container .subtitulo {
    font-family: 'Arial Black', serif;
    color: #3C394E;
    text-align: center;
    margin: 0;
}

.container-grid {
    display: grid;
    align-items: top;
    grid-template-columns: repeat(5, auto);
}

.cards {
    margin-top: 5vmax;
}

.cards div {
    display: flex;
    justify-content: center;
}

.cards h2 {
    font-size: 22px;
    color: #3C394E;
    margin: 10px 0 0 0;
    text-align: center;
}

.cards p {
    margin: 0;
    text-align: center;
}

.nums {
    width: 6vmax;
}

.arrows {
    width: 10vmax;
}
</style>