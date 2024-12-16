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
    <div class="main">
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
                <img data-aos="fade-left" src="/src/assets/services1.jpg" alt="">
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
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-template-areas: "izq der";
}

.container-grid {
    display: grid;
    grid-area: izq;
}

.container-grid p {
    font-size: 1.5vmax;
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
    justify-content: center;
    align-items: center;
}

.container-img img {
    margin: 0;
    width: 100%;
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
    margin: 1vmax 0;
}

@media (max-width: 768px) {
    .main {
        padding: 2% 5% 2% 5%;
    }

    .container {
        grid-template-columns: none;
        grid-template-areas: "der" "izq";
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

    .container-img {
        justify-content: center;
    }

    .container-img img {
        width: 50%;
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