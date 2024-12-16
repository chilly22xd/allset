<script setup>
import { RouterLink } from 'vue-router';

const arrayPoint = [
    {
        titulo: "Kitchen:",
        descripcion: "Cleaning and disinfecting surfaces, appliances, cabinets, drawers, and pantry."
    },
    {
        titulo: "Bathroom:",
        descripcion: "Sinks, countertops, toilets, tubs/showers, and floors."
    },
    {
        titulo: "All Rooms:",
        descripcion: "Vacuuming, sweeping, and mopping floors; cleaning baseboards, moldings, doors, and walls, with spot cleaning where necessary"
    }
];

</script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-grid">
                <div class="container-primary">
                    <p data-aos="fade-right" class="secundary-principal">General Cleaning</p>
                </div>
                <h1 data-aos="fade-right">Move-In/Move-Out</h1>
                <p data-aos="fade-right">Moving has never been easier. Our Move-In/Move-Out Cleaning
                    service is tailored for those transitioning into or out of a property.
                    We cover all essential areas, ensuring your new home or the
                    property you leave behind is spotless.</p>
                <div class="list">
                    <div v-for="list in arrayPoint">
                        <img data-aos="fade-right" src="/src/assets/checklist.png" alt="">
                        <p data-aos="fade-left"><span>{{ list.titulo }}</span> {{ list.descripcion }}</p>
                    </div>
                </div>
                <div class="btn-flex">
                    <router-link data-aos="fade-up-right" class="learn-more" to="">
                        <span class="circle">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">HIRE</span>
                    </router-link>
                </div>
            </div>
            <div class="container-img">
                <img data-aos="fade-left" src="/src/assets/services3.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 2% 11% 2% 11%;
}

.container {
    display: grid;
    grid-template-areas: "izq der";
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.container-grid {
    display: grid;
    grid-area: izq;
}

.container-grid p {
    font-size: 1.3vmax;
}

.container-grid h1 {
    line-height: 1;
    margin: 0;
    color: #3C394E;
    font-family: 'Arial Black', serif;
    font-size: 3vmax;
}

.container-img {
    grid-area: der;
    display: flex;
    justify-content: right;
    align-items: center;
}

.container-img img {
    width: 85%;
    border-radius: 30em;
}

.list {
    display: grid;
    gap: 25px;
}

.list div {
    display: flex;
    gap: 15px;
    justify-content: left;
}

.list p {
    margin: 0;
    font-size: 1.3vmax;
}

.list span {
    font-weight: bold;
}

.list img {
    width: 25px;
    height: 25px;
}

.btn-flex {
    display: flex;
    padding: 1vmax 0;
}

@media (max-width: 768px) {
    .main {
        padding: 2% 5%;
    }

    .container {
        grid-template-columns: none;
        grid-template-areas: "der" "izq";
    }

    .container-img {
        justify-content: center;
    }

    .container-img img {
        width: 50%;
    }

    .container-grid {
        gap: 2vmax;
    }

    .container-grid h1 {
        font-size: 3vmax;
        text-align: center;
    }

    .container-grid p {
        font-size: 2vmax;
        text-align: center;
    }

    .list {
        gap: 2vmax;
    }

    .list div {
        gap: 0.5vmax;
    }

    .list p {
        text-align: left;
    }

    .list img {
        width: 2vmax;
        height: 2vmax;
    }

    .btn-flex {
        justify-content: center;
    }
}
</style>