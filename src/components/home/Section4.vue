<script setup>
const checklist = '../../assets/checklist.png'
const arrayCheck = [
    'Our team comprises skilled professionals committed',
    'Count on us to be there when you need us',
    'Your satisfaction is our priorit'
]
</script>
<template>
    <div class="main"><!-- main -->
        <div class="container">
            <div class="container-grid">
                <p class="secundary">Choose</p>
                <h1>Why Choose Allset Cleaning Services</h1>
                <p>With Allset, you’re not just getting a cleaning service; you're
                    gaining a partner in cleanliness. Here’s why clients trust us:
                </p>
                <div class="list">
                    <div v-for="list in arrayCheck">
                        <img src="../../assets/checklist.png" alt="">
                        <p>{{ list }}</p>
                    </div>
                </div>
                <div class="container-flex">
                    <img src="/ASPIRANDO.png" alt="">
                    <p>We use top-quality products
                        and proven techniques to
                        ensure superior cleanliness and
                        hygiene.
                    </p>
                </div>
                <router-link class="primary" to="">Find Out More</router-link>
            </div>
            <div class="container-imgyears">
                <img class="img-years" src="/src/assets/years2.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    padding-top: 3%;
    padding-bottom: 3%;
    background-color: whitesmoke;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 6%;
    padding-right: 5%;
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

.primary {
    width: 12em;
    height: 3em;
    font-size: 1.2em;
    text-decoration: none;
    text-align: center;
    align-content: center;
    background-color: #0044F1;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 20px;
}

.secundary {
    display: flex;
    text-decoration: none;
    width: 8em;
    height: 1.2em;
    padding: 10px;
    color: #3C394E;
    font-size: 16px !important;
    background-color: #cbc9e6;
    border-radius: 10px;
    justify-content: center;
}

.list {
    display: grid;
    margin: 0;
    padding: 0;
}

.list div {
    height: 2.5em;
    display: flex;
    align-items: center;
    gap: 5px;
}

.list img {
    width: 25px;
    height: 25px;
}

.list p {
    font-size: 18px;
}

.container-flex {
    display: flex;
    align-items: center;
}

.container-flex img {
    width: 20vmax;
}

.container-flex p {
    font-size: 18px;
}

.container-flex-imgs {
    display: flex;
    justify-content: center;
    width: 100%;
}

.img2 {
    width: 25em;
    border-radius: 20px;
}

.container-imgyears {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.img-years {
    width: 100%;
}
</style>