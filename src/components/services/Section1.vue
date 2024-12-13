<script setup>
</script>
<template>
    <div class="main">
        <div class="container">
            <div data-aos="fade-right" class="container-grid">
                <div class="container-secundary">
                    <p class="secundary">Services</p>
                </div>
                <h1>We Transform Your Space, Simplifying Your Life.</h1>
            </div>
            <div class="container-img">
                <img data-aos="fade-up-left" src="/src/assets/aspirar-der.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: transparent;
    padding-bottom: 2%;
    padding-left: 11%;
    padding-right: 11%;
}

.container {
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;
}

.container-grid {
    display: grid;
}

.container-grid p {
    font-size: 1.2vmax;
}

.container-grid h1 {
    line-height: 1;
    margin: 0;
    font-size: 3vmax;
    font-family: 'Arial Black', serif;
    color: #3C394E;
}

.container-img {
    display: flex;
    align-items: center;
    justify-content: right;
}

.container-img img {
    width: 85%;
}

.secundary {
    background-color: #669FF3;
    width: 8em;
    height: 2em;
    color: white;
    border-radius: 10px;
    text-align: center;
    align-content: center;
}

@media (max-width: 768px) {
    .main {
        padding: 0 5%;
    }

    .container {
        grid-template-columns: none;
        gap: 2vmax;
    }

    .container p {
        font-size: 2vmax;
    }

    .container-img {
        justify-content: center;
    }

    .container-img img {
        width: 30vmax;
    }

    .container-grid h1 {
        text-align: center;
        font-size: 3vmax;
    }
}
</style>