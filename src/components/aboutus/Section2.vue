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
    padding: 2rem 11.5%;
}

.container {
    grid-template-areas: "container-img container-grid";
}
.container-grid .quest {
    margin: 0;
    color: #669FF3;
    font-weight: bold;
    font-size: 20px;
}

.container-grid ul {
    font-size: 1.3vmax;
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

@media (max-width: 768px) {
    .main {
        padding: 1rem 5%;
    }
    .container {
        grid-template-columns: none;
        grid-template-areas: "container-img" "container-grid";
    }
    .container-img {
        justify-content: center;
    }
    .container-img img {
        width: 60%;
    }
    .container-grid {
    }
    .container-grid span {
        font-size: 1.5vmax;
    }
    .container-grid  ul{
        font-size: 0.8rem;
        margin: 0;
        text-align: left;
    }
    .container-grid ul span {
        font-size: 0.8rem;
    }
}
</style>