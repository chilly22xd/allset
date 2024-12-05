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
                <p class="secundary">General Cleaning</p>
                <h1>20-Point Service</h1>
                <p>Perfect for regular maintenance or light to moderate cleaning
                    needs. Our team will handle essential tasks to keep your home
                    clean and organized. With an approximate duration of 3.5 hours,
                    we cover your home's most important areas, ensuring everything is
                    spotless.</p>
                <div class="list">
                    <div v-for="list in arrayPoint">
                        <img src="/src/assets/checklist.png" alt="">
                        <p><span>{{ list.titulo }}</span> {{ list.descripcion }}</p>
                    </div>
                </div>
                <router-link class="primary" to="">Hire</router-link>
            </div>
            <div class="container-img">
                <img src="/src/assets/services1.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 2% 15% 2% 15%;
}

.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.container-grid {
    display: grid;
}

.container-grid p {
    font-size: 22px;
}

.container-grid h1 {
    margin: 0;
    color: #3C394E;
    font-family: 'Arial Black', serif;
    font-size: 3em;
}

.container-img {
    display: flex;
    justify-content: right;
    align-items: center;
}

.container-img img {
    margin: 0;
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
    align-items: top;
}

.list p {
    margin: 0;
    font-size: 20px;
}

.list span {
    font-weight: bold;
}

.list img {
    width: 25px;
    height: 25px;
}

.primary {
    width: 12em;
    height: 3em;
    font-size: 1.2em;
    text-decoration: none;
    text-align: center;
    align-content: center;
    background-color: #0044F1;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 3vmax;
}

.secundary {
    text-align: center;
    width: 12em;
    height: 1.2em;
    padding: 10px;
    color: #3C394E;
    font-size: 16px !important;
    background-color: #DCE6ff;
    border-radius: 10px;
}
</style>