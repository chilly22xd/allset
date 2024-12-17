<script setup>

const planBasic = [
    "Cleaning bathrooms",
    "Mopping floors",
    "Vacuuming carpets and rugs",
    "Dusting and wiping surfacest"
]
const planStandard = [
    "All services from the basic",
    "Washing baseboeards, molding",
    "Cleaning inside cabinets",
    "cleaning inside drawers"
]
const planPremium = [
    "All services from standard",
    "Cleaning inside closets",
    "Emptying trash bins",
    "High-touch surface"
]
const arrayPlans = [
    {
        plan: "Basic Plan",
        costo: 30,
        opciones: planBasic
    },
    {
        plan: "Standard Plan",
        costo: 70,
        opciones: planStandard
    },
    {
        plan: "Premium Plan",
        costo: 120,
        opciones: planPremium
    }
]

</script>
<template>
    <div class="main">
        <div class="container">
            <div class="container-primary">
                <p data-aos="fade-right" class="primary">Price Package</p>
            </div>
            <div class="container-grid">
                <h1 data-aos="fade-down">Choose Your Perfect Clean</h1>
                <div >
                    <img data-aos="fade-up" src="/src/assets/REGALO.png">
                </div>
                <p data-aos="fade-down">Explore our range of meticulously curated cleaning packages designed to meet your unique needs. </p>
            </div>
            <div class="container-flotante">
                <div data-aos="fade-up" class="cards" v-for="plan in arrayPlans" :class="[{'border-azul': plan.plan === 'Standard Plan' }]">
                    <div class="container-justify">
                        <p>{{plan.plan}}</p>
                    </div>
                    <div class="costo">
                        <h2>$</h2>
                        <h1 data-aos="fade-right">{{plan.costo}}</h1>
                        <p>monthly</p>
                    </div>
                    <div class="list" v-for="opciones in plan.opciones">
                        <div>
                            <img src="../../assets/checklist.png">
                            <p>{{opciones}}</p>
                        </div>
                    </div>
                    <div class="container-justify">
                        <router-link class="btn-card" to=""> Hire </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    padding: 1rem 11.5%;
}
.container {
    grid-template-columns: none;
    grid-template-areas: "container-primary" "container-grid" "container-flotante";
    position: relative;
}
.container-primary {
    grid-area: container-primary;
}
.container-justify {
    justify-content: center;
}
 .container-flotante {
     display: flex;
     translate: 0 -8vmax;
 }
.container-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.container-grid > div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.container-grid > div > img {
    width: 90%;
}
.list {
    margin-left: 2vmax;
}
.cards {
    width: 100%;
    padding: 1rem 0.8rem;
}
.costo {
    margin: 0;
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 0;
}
.costo > h2 {
    font-size: 2vmax;
    color: #669FF3;
}
.costo > h1 {
    margin: 0;
    padding: 0;
    font-size: 3.5vmax;
    font-family: "Arial Black",serif;
    color: #669FF3;
}
.border-azul {
    border: 12px solid #0044F1;
}


@media screen and (max-width: 768px) {
    .main {
        padding: 5%;
    }
    .container {
        grid-template-columns: none;
        grid-template-areas: "container-primary" "container-grid" "container-flotante";
    }
    .container-grid {
        grid-template-columns: none;
    }
    .container-grid > div {
        display: none;
    }
    .container-flotante {
        flex-direction: column;
        translate: none;
        padding: 4vmax;
    }

    .costo > h2 {
        font-size: 3vmax;
    }
    .costo > h1 {
        font-size: 6vmax;
    }

}
</style>