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
                <div data-aos="fade-right" class="container-secundary">
                    <p class="secundary">Choose</p>
                </div>
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
            </div>
            <div data-aos="fade-left" class="container-img">
                <img src="/src/assets/years2.png" alt="">
            </div>
        </div>
        <div class="btn-flex">
            <router-link data-aos="fade-right" class="learn-more" to="">
                        <span class="circle">
                            <span class="icon arrow"></span>
                        </span>
                <span class="button-text">FIND OUT MORE</span>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 1rem 11.5%;
}
.container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-areas: "container-grid container-img";
}
.secundary {
    font-size: 1.2rem;
}

.container-img {
    justify-content: right;
}
.container-img > img {
    width: 100%;
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
    font-size: 1.2vmax;
}

.btn-flex {
    display: flex;
}

@media screen and (max-width: 728px) {
    .main {
        padding: 1rem 5%;
    }
    .container-img {
        display: none;
    }
    .container {
        grid-template-columns: none;
        grid-template-areas: "container-grid";
    }

    .container-flex {
        flex-direction: column;
        gap: 0;
    }
    .container-flex p {
        font-size: 1.8vmax;
    }

    .container-flex img {
        width: 90%;
    }


    .btn-flex {
        justify-content: center;
    }
}
</style>