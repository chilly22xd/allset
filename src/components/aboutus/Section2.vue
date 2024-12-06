<script setup></script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-img">
                <img data-aos="fade-right" src="/src/assets/years3.png" alt="">
            </div>
            <div data-aos="fade-left" class="container-grid">
                <h1>Professional Cleaning, Guaranteed Results.</h1>
                <p>At AllSet!, we believe every home deserves a special touch.
                    Founded with the mission of making your life easier, we
                    specialize in delivering exceptional cleaning services with
                    meticulous attention to detail.</p>
                <p data-aos="fade-up-left" class="quest">What makes us different?</p>
                <ul>
                    <li data-aos="fade-up"><span>Trusted Team:</span>All our professionals are carefully selected and
                        trained to ensure flawless results.</li>
                    <li data-aos="fade-up"><span>Eco-Friednly Care:</span>We use products that are safe for your
                        family, pets, and the planet.</li>
                    <li data-aos="fade-up"><span>Commitment to Quality:</span>Every service is reviewed to ensure
                        your complete satisfaction.</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
  background-color: whitesmoke;
  padding: 2% 11%;
}

.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.container-grid {
    display: grid;
    align-items: center;
}

.container-grid h1 {
  line-height: 1;
    margin: 0;
    color: #3C394E;
    font-size: 3vmax;
    font-family: 'Arial Black', serif;
}

.container-grid .quest {
    margin: 0;
    color: #669FF3;
    font-weight: bold;
    font-size: 20px !important;
}

.container-grid p {
    font-size: 1.5vmax;
}

.container-grid ul {
    font-size: 1.2vmax;
}

.container-grid ul span {
    font-weight: bold;
}

.container-img {
    display: flex;
    justify-content: left;
    align-items: center;
}

.container-img img {
    width: 95%;
}
</style>