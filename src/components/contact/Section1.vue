<script setup>
const arrayData = [
    {
        icon: '/allset/src/assets/telefono.png',
        detalles: '1-800-ALLSET'
    },
    {
        icon: '/allset/src/assets/correo.png',
        detalles: 'hello@allset-clean.com'
    }
]
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="container-img">
                <img data-aos="fade-up-right" src="/src/assets/trapear-izq.png">
            </div>
            <div data-aos="fade-left" class="container-grid">
                <h1>Contact Info:</h1>
                <p>We're here for you. Contact us and discover how we can
                    help keep your home spotless. Your satisfaction is our
                    priority!</p>
                <div class="container-flex" v-for="item in arrayData">
                    <img data-aos="fade-up" :src="item.icon" alt="">
                    <p>{{item.detalles}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    padding: 1vmax 11% 1vmax 11%;
}
.container{
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
}
.container-img {
    display: flex;
    justify-content: left;
}
.container-img img {
    width: 65%;
}
.container-grid {
    display: grid;
}
.container-grid h1 {
    line-height: 1;
    font-size: 3vmax;
    color: #3C394E;
    margin: 0;
    font-family: 'Arial Black', serif;
}
.container-grid p {
    font-size: 1.5vmax;
}
.container-flex {
    display: flex;
    gap: 2vmax;
    align-items: center;
}
.container-flex img {
    width: 2.5vmax;
    height: 2.5vmax;
}
.container-flex p {
    font-size: 1.2vmax;
}
</style>