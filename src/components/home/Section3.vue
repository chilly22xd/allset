<script setup>
</script>
<template>
    <div data-aos="fade-up" class="main"><!-- main -->
        <div data-aos="fade-right" class="container">
            <img src="/ASPIRANDO.png" alt="">
        </div>
    </div>

</template>
<style scoped>
.main {
    background-color: rgb(212, 229, 252);

}

.container {
    display: flex;
    flex-wrap: wrap;
    height: 10em;
}

.container img {
    width: 45%;
    float: left;
    translate: 3vmax -20vmax;
}

@media screen and (max-width: 768px) {
    .container {
        height: 10vmax;
    }

    .container img {
        translate: 2vmax -8vmax;
    }
}
</style>