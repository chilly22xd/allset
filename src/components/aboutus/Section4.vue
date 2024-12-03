<script setup></script>
<template>
    <div class="main">
        <div class="container">
            <h1>What Clients Say</h1>
            <div class="container columns">
                <div class="container-img">
                    <img src="/src/assets/about.jpg" alt="">
                </div>
                <div>
                    <div>
                        <p class="comillas">"</p>
                    </div>
                    <div class="container-dialog">
                        <p>"AllSet! did an amazing job. My home has never been this
                            clean. The team was punctual, professional, and the products
                            they use give me peace of mind. I highly recommend their
                            services!"</p>
                        <span>Laura M.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-va">
            <img src="/src/assets/VAQUERO.png" alt="">
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 3% 6% 3% 6%;
}

.container {
    display: grid;
}

.columns {
    grid-template-columns: repeat(2, 1fr);
}

.container h1 {
    text-align: center;
    font-size: 3em;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container-grid {
    display: grid;
    justify-content: center;
}

.container-img {
    display: grid;
    align-items: center;
    justify-content: center;
}

.container-img img {
    width: 80%;
    border-top-right-radius: 30em;
    border-bottom-left-radius: 30em;
    border-bottom-right-radius: 30em;
}

.comillas {
    position: relative;
    font-family: 'Arial Black', serif;
    width: 40px;
    height: 70px;
    color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    text-align: center;
    font-size: 3em;
    z-index: 5;
    background-color: #669FF3;
    translate: -10vmax 4vmax;
}

.container-dialog {
    position: relative;
    padding: 2% 10% 2% 10%;
    background-color: rgb(212, 229, 252);
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
    border-bottom-left-radius: 5em;
    translate: -30% 0;
}

.container-dialog p {
    font-size: 22px;
}

.container-dialog span {
    color: #669FF3;
    font-weight: bold;

}

.container-va {
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: right;
    translate: -10vmax -16vmax;
}

.container-va img {
    width: 350px;
    height: 350px;
}
</style>