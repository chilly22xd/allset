<script setup></script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-grid">
                <p class="secundary">About Us</p>
                <h1>Making Your house Clean For Looks As a New</h1>
                <p>Fresh,spotless, and ready to impress</p>
            </div>
            <div class="container-img">
                <img src="/src/assets/TRAPEAR.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: transparent;
}

.container {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 11%;
    padding-right: 11%;
}

.container-grid {
    display: grid;
}

.container-grid h1 {
    font-size: 3em;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container-grid p {
    font-size: 22px;
}

.container-img {
    display: flex;
    align-items: center;
    justify-content: right;
}

.container-img img {
    width: 55%;
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