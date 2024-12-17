<script setup>
</script>
<template>
    <div class="main">
        <div class="container">
            <div data-aos="fade-right" class="container-grid">
                <div class="container-secundary">
                    <p class="secundary-title">About Us</p>
                </div>
                <h1>Making Your house Clean For Looks As a New</h1>
                <p>Fresh,spotless, and ready to impress</p>
            </div>
            <div class="container-img">
                <img data-aos="fade-up-left" src="/src/assets/TRAPEAR.png" alt="">
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
    display: flex;
    align-items: center;
    justify-content: right;
}

.container-img img {
    width: 55%;
}

@media (max-width: 768px) {
   .main {
       padding: 1rem 5%;
   }
    .container {
        grid-template-columns: none;
        grid-template-areas: "container-grid" "container-img";
    }
    .container-img {
        justify-content: center;
    }
}
</style>