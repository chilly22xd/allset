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
                <div class="container-secundary">
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
                <div class="btn-flex">
                    <router-link class="learn-more" to="">
                        <span class="circle">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">FIND OUT MORE</span>
                    </router-link>
                </div>
            </div>
            <div data-aos="fade-left" class="container-imgyears">
                <img class="img-years" src="/src/assets/years2.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    padding: 3% 11% 3% 11%;
    background-color: whitesmoke;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.container-grid {
    display: grid;
}

.container-grid h1 {
    line-height: 1;
    font-size: 3vmax;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container-grid p {
    font-size: 1.5vmax;
}



.list {
    display: grid;
    margin: 0;
    padding: 0;
}

.list div {
    height: 2.5em;
    display: flex;
    align-items: center;
    gap: 5px;
}

.list img {
    width: 25px;
    height: 25px;
}

.list p {
    font-size: 1.2vmax;
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

.container-imgyears {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.img-years {
    width: 100%;
}

.btn-flex {
    display: flex;
}

@media (max-width: 728px) {
    .main {
        padding: 8% 5%;
    }

    .container {
        grid-template-columns: none;
    }

    .container-grid {
        text-align: center;
    }

    .container-grid h1 {
        font-size: 3vmax;
    }

    .container-grid p {
        font-size: 2vmax;
    }

    .list div {
        align-items: center;
    }

    .list img {
        width: 2vmax;
        height: 2vmax;
    }

    .list p {
        text-align: left;
    }

    .container-flex {
        flex-direction: column;
        gap: 0;
    }

    .container-flex img {
        width: 90%;
    }

    .container-imgyears {
        display: none;
    }

    .btn-flex {
        justify-content: center;
    }
}
</style>