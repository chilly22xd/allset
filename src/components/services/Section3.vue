<script setup>
import { RouterLink } from 'vue-router';

const arrayPoint = [
    {
        titulo: "Kitchen:",
        descripcion: "Cleaning of sink, appliances, microwave, stove,cabinets, countertops, and floors."
    },
    {
        titulo: "Bathroom:",
        descripcion: "Sinks, countertops, toilets, tubs/showers, and floors."
    },
    {
        titulo: "All Rooms:",
        descripcion: "Arranging items, removing cobwebs,disinfecting handles and switches, vacuuming floors,cleaning windowsills and shelves, and trash removal."
    }
];

</script>
<template>
    <div class="main hidden">
        <div class="container">
            <div class="container-grid">
                <div class="container-primary">
                    <p data-aos="fade-right" class="secundary-principal">General Cleaning</p>
                </div>
                <h1 data-aos="fade-right">20-Point Service</h1>
                <p data-aos="fade-right">Perfect for regular maintenance or light to moderate cleaning
                    needs. Our team will handle essential tasks to keep your home
                    clean and organized. With an approximate duration of 3.5 hours,
                    we cover your home's most important areas, ensuring everything is
                    spotless.</p>
                <div class="list">
                    <div v-for="list in arrayPoint">
                        <img data-aos="fade-right" src="/src/assets/checklist.png" alt="">
                        <p data-aos="fade-left"><b>{{list.titulo}}</b> {{ list.descripcion }}</p>
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
                <img data-aos="fade-left" src="/src/assets/services1.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 1rem 11.5%;
}
.container {
    grid-template-areas: "container-grid container-img";
    gap: 1rem;
}

.container-img img {
    max-width: 100%;
    border-radius: 30vmax;
}
.list {
    gap: 0;
}
.list > div > p {
    font-size: 1.2rem;
}
.btn-flex {
    display: flex;
    margin: 1vmax 0;
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
        width: 50%;
    }

    .list {
        gap: 0;
    }
    .list > div > p {
        font-size: 2vmax;
    }

    .list p {
        text-align: left;
    }

    .btn-flex {
        justify-content: center;
    }
}
</style>