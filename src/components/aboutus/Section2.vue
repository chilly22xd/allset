<script setup></script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-img">
                <img src="/src/assets/years3.png" alt="">
            </div>
            <div class="container-grid">
                <h1>Professional Cleaning, Guaranteed Results.</h1>
                <p>At AllSet!, we believe every home deserves a special touch.
                Founded with the mission of making your life easier, we
                specialize in delivering exceptional cleaning services with
                meticulous attention to detail.</p>
                <p class="quest">What makes us different?</p>
                <ul>
                    <li><span>Trusted Team:</span>All our professionals are carefully selected and
                        trained to ensure flawless results.</li>
                    <li><span>Eco-Friednly Care:</span>We use products that are safe for your
                        family, pets, and the planet.</li>
                    <li><span>Commitment to Quality:</span>Every service is reviewed to ensure
                        your complete satisfaction.</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main{
    padding-top: 2%;
    background-color: whitesmoke;
}
.container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    padding-left: 6%;
    padding-right: 6%;
}
.container-grid{
    display: grid;
    align-items: centar;
}
.container-grid h1{
    margin: 0;
    color: #3C394E;
    font-size: 3em;
    font-family: 'Arial Black',serif;
}
.container-grid .quest{
    margin: 0;
    color: #669FF3;
    font-weight: bold;
    font-size: 20px !important;
}
.container-grid p{
    font-size: 22px;
}
.container-grid ul{
    font-size: 18px;
}
.container-grid ul span{
    font-weight: bold;
}
.container-img{
    display: grid;
    align-items: center;
    justify-content: center;
}
.container-img img{
    width: 100%;
}
</style>