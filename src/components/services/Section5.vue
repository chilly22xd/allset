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
                        <p data-aos="fade-left"><b>{{ list.titulo }}</b> {{ list.descripcion }}</p>
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
    padding: 1rem 11.5%;
    overflow-x: hidden;
}
.list {
    gap: 0;
}
.list > div > p {
    font-size: 1.2rem;
}
.container {
    grid-template-areas: "container-grid container-img";
    gap: 1rem;
}
.container-img img {
    width: 100%;
    border-radius: 30em;
}



.btn-flex {
    display: flex;
    padding: 1vmax 0;
}

@media (max-width: 768px) {
    .main {
        padding: 1rem 5%;
        right: 0;
    }

    .container {
        grid-template-columns: none;
        grid-template-areas: "container-img" "container-grid";
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
        gap: 0;
    }
    .list > div > p {
        font-size: 2vmax;
        text-align: left;
    }



    .btn-flex {
        justify-content: center;
    }
}
</style>