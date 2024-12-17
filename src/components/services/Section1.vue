<script setup>
</script>
<template>
    <div class="main">
        <div class="container">
            <div data-aos="fade-right" class="container-grid">
                <div class="container-secundary">
                    <p class="secundary-title">Services</p>
                </div>
                <h1>We Transform Your Space, Simplifying Your Life.</h1>
            </div>
            <div class="container-img">
                <img data-aos="fade-up-left" src="/src/assets/aspirar-der.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: transparent;
    padding: 1rem 11.5%;
}

.container {
    grid-template-areas: "container-grid container-img";
}
.container-img {
    justify-content: right;
}
.container-img img {
    width: 85%;
}

@media screen and (max-width: 768px) {
    .main {
        padding: 0 5%;
    }
    .container {
        grid-template-columns: none;
        grid-template-areas: "container-grid" "container-img";
    }
    .container-img {
        justify-content: center;
    }
    .container-img img {
        width: 55%;
    }

    .container-grid h1 {
        text-align: center;
        font-size: 3vmax;
    }
}
</style>