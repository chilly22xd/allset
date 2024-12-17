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
                <img data-aos="fade-right" src="/src/assets/services2.jpg" alt="">
            </div>
            <div class="container-grid">
                <div class="container-primary">
                    <p data-aos="fade-left" class="secundary-principal">General Cleaning</p>
                </div>
                <h1 data-aos="fade-left">Deep Cleaning</h1>
                <p data-aos="fade-left">For homes requiring more detailed attention, our Deep Cleaning
                    service covers all essential areas, along with additional tasks to
                    ensure your home is thoroughly cleaned and sanitized.</p>
                <div class="list">
                    <div v-for="list in arrayDeep">
                        <img data-aos="fade-right" src="/src/assets/checklist.png" alt="">
                        <p data-aos="fade-left"><b>{{list.titulo}}</b> {{ list.descripcion }}</p>
                    </div>
                </div>
                <div class="btn-flex">
                    <router-link data-aos="fade-up-left" class="learn-more" to="">
                        <span class="circle">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">HIRE</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: whitesmoke;
    padding: 2rem 11.5%;
}

.container {
    grid-template-areas: "container-img container-grid";
    gap: 1rem;
}

.container-img img {
    width: 100%;
    border-radius: 30em;
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


    .btn-flex {
        justify-content: center;
    }
}
</style>