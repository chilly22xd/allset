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
                        <p data-aos="fade-left"><span>{{ list.titulo }}</span> {{ list.descripcion }}</p>
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
    padding: 2% 11% 2% 11%;
    left: 0;
    right: 0;
}

.container {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
}

.container-grid {
    display: grid;
    padding-right: 10px;
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
    display: flex;
    justify-content: left;
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
    margin: 1vmax 0;
}

@media (max-width: 768px) {
    .main {
        padding: 2% 5%;
    }

    .container {
        grid-template-columns: none;
    }

    .container-grid {
        gap: 2vmax;
    }

    .container-grid h1 {
        text-align: center;
        font-size: 3vmax;
    }

    .container-grid p {
        text-align: center;
        font-size: 2vmax;
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
        width: 2.5vmax;
        height: 2.5vmax;
    }

    .btn-flex {
        justify-content: center;
    }
}
</style>