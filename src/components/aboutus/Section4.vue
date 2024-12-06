<script setup></script>
<template>
    <div class="main">
        <div class="container">
            <h1>What Clients Say</h1>
            <div>
                <div class="container-img">
                    <img data-aos="fade-right" src="/src/assets/about.jpg" alt="">
                </div>
                <div class="container-elements">
                    <div data-aos="fade-down" class="container-comillas">
                        "
                    </div>
                    <div data-aos="fade-left" class="container-text">
                        <p>"AllSet! did an amazing job. My home has never been this
                            clean. The team was punctual, professional, and the products
                            they use give me peace of mind. I highly recommend their
                            services!"</p>
                        <div>
                            <span>Laura M.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-va">
                <img data-aos="fade-down-left" src="/src/assets/VAQUERO.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 3% 11% 2% 11%;
}

.container {
    display: grid;
    gap: 2vmax;
}

.container h1 {
    text-align: center;
    font-size: 3vmax;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container-dialog p {
    font-size: 22px;
}

.container-dialog span {
    color: #669FF3;
    font-weight: bold;

}

.container-img {
    display: flex;
    justify-content: left;
}

.container-img img {
    width: 50%;
    border-top-right-radius: 30em;
    border-bottom-left-radius: 30em;
    border-bottom-right-radius: 30em;
}

.container-elements {
    position: absolute;
    display: flex;
    justify-content: right;
    translate: 25vmax -25vmax;
}

.container-text {
    width: 45vmax;
    padding: 3vmax;
    background-color: #cde1ff;
    border-top-left-radius: 30vmax;
    border-bottom-left-radius: 30vmax;
    border-top-right-radius: 30vmax;
}

.container-text p {
    font-size: 1.2vmax;
}

.container-text span {
    position: relative;
    font-size: 1.2vmax;
    color: #669FF3;
    font-weight: bold;
}

.container-comillas {
    font-size: 3.5vmax;
    font-family: 'Arial Black', serif;
    color: white;
    border-top-left-radius: 1vmax;
    border-top-right-radius: 1vmax;
    border-bottom-right-radius: 1vmax;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 3vmax;
    height: 5vmax;
    z-index: 2;
    background-color: #669FF3;
    translate: -45vmax -2vmax;
}

.container-va {
    position: absolute;
    display: flex;
    justify-content: right;
    translate: 55vmax 27vmax;
    z-index: 2;
}

.container-va img {
    width: 20vmax;
    height: 20vmax;
}
</style>