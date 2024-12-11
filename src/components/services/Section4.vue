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
                <p data-aos="fade-left" class="secundary">General Cleaning</p>
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

.btn-flex {
    display: flex;
    margin: 1vmax 0;
}

a {
    margin-top: 1vmax;
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: 1vmax;
    font-family: inherit;
}

a.learn-more {
    width: 15vmax;
    height: 3vmax;
}

a.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3vmax;
    height: 3vmax;
    background: #0044F1;
    border-radius: 10px;
}

a.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
}

a.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625vmax;
    width: 1.125vmax;
    height: 0.125vmax;
    background: none;
}

a.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29vmax;
    right: 0.0625vmax;
    width: 0.625vmax;
    height: 0.625vmax;
    border-top: 0.125vmax solid #fff;
    border-right: 0.125vmax solid #fff;
    transform: rotate(45deg);
}

a.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75vmax 0;
    margin: 0 0 0 1.85vmax;
    color: #0044F1;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
}

a:hover .circle {
    width: 100%;
}

a:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1vmax, 0);
}

a:hover .button-text {
    color: #fff;
}

@media (max-width: 768px) {
    .main {
        padding: 2% 5% 2% 5%;
    }

    .container {
        grid-template-columns: none;
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
        gap: 1vmax;
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

    a {
        font-size: 1.8vmax;
    }

    a.learn-more {
        width: 25vmax;
        height: 6vmax;
    }

    a.learn-more .circle {
        width: 25vmax;
        height: 6vmax;
    }

    a.learn-more .circle .icon.arrow {
        left: 1vmax;
        width: 1.5vmax;
        height: 0.21vmax;
    }

    a.learn-more .circle .icon.arrow::before {
        top: -0.29vmax;
        transform: rotate(45deg);
    }

    a.learn-more .button-text {
        padding: 1.6vmax 0;
        color: white;
        margin: 0 0 0 3vmax;
    }

    a:hover .circle {
        width: 25vmax;
    }

    a:hover .circle .icon.arrow {
        transform: translate(1.5vmax, 0);
    }
}
</style>