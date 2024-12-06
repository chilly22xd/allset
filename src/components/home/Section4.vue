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
            <div data-aos="fade-right" class="container-grid">
                <p class="secundary">Choose</p>
                <h1>Why Choose Allset Cleaning Services</h1>
                <p>With Allset, you’re not just getting a cleaning service; you're
                    gaining a partner in cleanliness. Here’s why clients trust us:
                </p>
                <div class="list">
                    <div data-aos="fade-down" v-for="list in arrayCheck">
                        <img src="../../assets/checklist.png" alt="">
                        <p>{{ list }}</p>
                    </div>
                </div>
                <div data-aos="fade-up" class="container-flex">
                    <img src="/src/assets/home1.jpg" alt="">
                    <p>We use top-quality products
                        and proven techniques to
                        ensure superior cleanliness and
                        hygiene.
                    </p>
                </div>
                <router-link class="primary" to="">Find Out More</router-link>
            </div>
            <div data-aos="fade-left" class="container-imgyears">
                <img class="img-years" src="/src/assets/years2.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    padding: 3% 11% 3% 11%;
    background-color: whitesmoke;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.container-grid {
    display: grid;
}

.container-grid h1 {
    line-height: 1;
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
    background-color: #DCE6ff;
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
    gap: 10px;
}

.container-flex img {
    width: 15vmax;
    border-radius: 10px;
    margin: 2px;
}

.container-flex p {
    font-size: 18px;
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

.btn-more {
    margin-top: 2vmax;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
}

.btn-more.learn-more {
    width: 12em;
    height: 3em;
}

.btn-more.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
}

.btn-more.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
}

.btn-more.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

.btn-more.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
}

.btn-more.learn-more .btn-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #0044F1;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
}

.btn-more:hover .circle {
    width: 100%;
}

.btn-more:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
}

.btn-more:hover .btn-text {
    color: #fff;
}
</style>