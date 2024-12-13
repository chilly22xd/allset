<script setup>
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
                <div>
                    <div class="container-flex">
                        <img data-aos="fade-up" src="/src/assets/telefono.png" alt="telefono">
                        <p>1-800-ALLSET</p>
                    </div>
                    <div class="container-flex">
                        <img data-aos="fade-up" src="/src/assets/correo.png" alt="correo">
                        <p>hello@allset-clean.com</p>
                    </div>
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
    grid-template-areas: "izq der";
}
.container-img {
    display: flex;
    justify-content: left;
    grid-area: izq;
}
.container-img img {
    width: 65%;
}
.container-grid {
    display: grid;
    grid-area: der;
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

@media (max-width: 768px) {
    .main {
        padding: 3% 5% 0 5%;
    }
    .container {
        grid-template-columns: none;
        grid-template-areas: "der" "izq";
    }

    .container-img {
        justify-content: center;
    }
    .container-img img {
        width: 50%;
    }
    .container-grid {
        gap: 2vmax;
    }
    .container-grid h1 {
        text-align: center;
        font-size: 3vmax;
    }
    .container-grid p {
        text-align: center;
        font-size: 2vmax;
    }
    .container-flex {
        gap: 1vmax;
    }
    .container-flex img {
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>