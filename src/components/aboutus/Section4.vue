<script setup>
</script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-justify">
                <h1 data-aos="fade-down">What Clients Say</h1>
            </div>
            <div>
                <div class="container-img">
                    <img data-aos="fade-right" src="/src/assets/about.jpg" alt="">
                </div>
                <div class="container-elements">
                    <div class="container-comillas">
                        "
                    </div>
                    <div class="container-text">
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
    padding: 1rem 11.5%;
}
.container-justify {
    justify-content: center;
}
h1 {
    text-align: center;
    font-family: "Arial Black",serif;
    line-height: 1.1;
    font-size: 3vmax;
    color: #3C394E;
}
.container {
    grid-template-columns: none;
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
    height: 0vmax;
    position: relative;
    display: flex;
    z-index: 1;
    justify-content: right;
    translate: 0 -25vmax;
}

.container-text {
    width: 45vmax;
    height: 15vmax;
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
    translate: -38vmax -2vmax;
}

.container-va {
    position: absolute;
    display: flex;
    justify-content: right;
    translate: 60vmax 15vmax;
    z-index: 2;
}

.container-va img {
    width: 18vmax;
    height: 18vmax;
}

@media (max-width: 768px) {
    .main {
        padding: 8% 5%;
    }
    .container {
        gap: 2vmax;
    }
    .container-img img{
        width: 20vmax;
    }
    .container-elements{
        margin-top: 1vmax;
        justify-content: center;
        translate: none;
        height: auto;
    }
    .container-comillas {
        translate: -15vmax -3vmax;
    }
    .container-text{
        width: 40vmax;
        height: 17vmax;
        padding: 3vmax;
        border-top-left-radius: 5vmax;
        border-bottom-left-radius: 5vmax;
        border-top-right-radius: 5vmax;
    }
    .container-text p {
        font-size: 1.5vmax;
        margin: 0;
    }
    .container-text span {
        font-size: 1.5vmax;
        margin: 0;
    }
    .container-va {
       display: none;
    }
    .container-va img {
        width: 15vmax;
        height: 15vmax;
    }
    .container-img {
        display: none;
    }
}
</style>