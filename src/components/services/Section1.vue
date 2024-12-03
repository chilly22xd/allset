<script setup>
</script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-grid">
                <p class="secundary">Services</p>
                <h1>We Transform Your Space, Simplifying Your Life.</h1>
            </div>
            <div class="container-img">
                <img src="/src/assets/aspirar-der.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: transparent;
    padding-bottom: 2%;
}

.container {
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;
    padding-left: 6%;
    padding-right: 6%;
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

.container-img {
    display: grid;
    align-items: center;
    justify-content: center;
}

.container-img img {
    width: 100%;
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
</style>