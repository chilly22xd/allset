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
            <div class="container-img">
                <img src="/header.png">
            </div>
            <div class="container-grid">
                <h1>Feel Your Way For Freshness</h1>
                <p>Experience the epitome of cleanliness with Allset. We provide top-notch cleaning services tailored to your needs, ensuring your spaces shine with perfection</p>
                <div class="container-justify">
                    <router-link class="btn-escoba" to="/allset/services">
                        <p>OUR SERVICES</p><img src="/escoba.png">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {

}
.container-justify {
    justify-content: center;
}
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-areas: "izq der";
    align-items: center;
}
.container-img {
    grid-area: der;
    justify-content: right;
}
.container-img img {
    max-width: 100%;
}
.container-grid {
    display: grid;
    grid-area: izq;
}
.container-grid h1 {
    font-size: 3vmax;
    color: #3C394E;
    font-family: "Arial Black",serif;
    line-height: 1;
}
.container-grid p {
    font-size: 2vmax;
}
.btn-escoba {
    width: 50%;
    background-color: #669FF3;
    display: flex;
    align-items: center;
    justify-content: right;
    border-radius: 30px;
    gap: 1.5vmax;
}
.btn-escoba p {
    color: white;
}
.btn-escoba img{
    width: 8vmax;
    height: 8vmax;
}
@media (max-width: 768px) {
    .container {
        grid-template-columns: none;
        grid-template-areas: "izq" "der";
        text-align: center;
    }
    .container-grid {
        padding: 5%;
    }


}
</style>