<script setup>
const arrayDeep = [
    {
        titulo: "Kitchen:",
        descripcion: "Cleaning of the oven (inside and out), fridge (if empty), sink, appliances, microwave, stove, cabinets,countertops, and floors."
    },
    {
        titulo: "Bathroom:",
        descripcion: "inks, countertops, toilets, tubs/showers, and floors."
    },
    {
        titulo: "All Rooms:",
        descripcion: "Arranging items, removing cobwebs, disinfecting handles and switches, vacuuming floors, cleaning windowsills and shelves, and trash removal."
    },
    {
        titulo: "Addiotional Services:",
        descripcion: "Window cleaning, closets, and other areas upon request."
    }
];
</script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-img">
                <img src="/src/assets/services2.jpg" alt="">
            </div>
            <div class="container-grid">
                <p class="secundary">General Cleaning</p>
                <h1>Deep Cleaning</h1>
                <p>For homes requiring more detailed attention, our Deep Cleaning
                    service covers all essential areas, along with additional tasks to
                    ensure your home is thoroughly cleaned and sanitized.</p>
                <div class="list">
                    <div v-for="list in arrayDeep">
                        <img src="/src/assets/checklist.png" alt="">
                        <p><span>{{ list.titulo }}</span> {{ list.descripcion }}</p>
                    </div>
                </div>
                <router-link class="primary" to="">Hire</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 2% 6% 2% 6%;
}

.container {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
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
    justify-content: center;
}

.container-img img {
    width: 90%;
    border-radius: 30em;
}

.list {
    display: grid;
    gap: 10px;
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
    margin-top: 20px;
}

.secundary {
    text-align: center;
    width: 12em;
    height: 1.2em;
    padding: 10px;
    color: #3C394E;
    font-size: 16px !important;
    background-color: #cbc9e6;
    border-radius: 10px;
}
</style>