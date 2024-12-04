<script setup>

const planBasic = [
    "Cleaning bathrooms",
    "Mopping floors",
    "Vacuuming carpets and rugs",
    "Dusting and wiping surfacest"
];

const planStandard = [
    "All services from the basic",
    "Washing baseboeards, molding",
    "Cleaning inside cabinets",
    "cleaning inside drawers"
];
const planPremium = [
    "All services from standard",
    "Cleaning inside closets",
    "Emptying trash bins",
    "High-touch surface"
];

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
            <p class="primary">Price Package</p>
            <div class="container-grid">
                <h1>Choose Your Perfect Clean</h1>
                <img src="/src/assets/REGALO.png" alt="">
                <p>Explore our range of meticulously curated cleaning
                    packages designed to meet your unique needs.
                </p>
            </div>
            <div class="container-plans">
                <div v-for="plan in arrayPlans" :class="['card-plan', { 'borde-azul': plan.plan === 'Standard Plan' }]">
                    <p>{{ plan.plan }}</p>
                    <div class="costo-plan">
                        <h2>$</h2>
                        <h1>{{ plan.costo }}</h1>
                        <p>monthly</p>
                    </div>
                    <div v-for="opciones in plan.opciones" class="opciones-plan">
                        <img src="/src/assets/checklist.png" alt="">
                        <p>{{ opciones }}</p>
                    </div>
                    <router-link class="btn-plan" to="">Hire</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main {
    background-color: transparent;
    padding-top: 5%;
}

.container {
    display: grid;
    padding-left: 6%;
    padding-right: 6%;
}

.container h1 {
    font-size: 2.2em;
    font-family: 'Arial Black', serif;
    color: #3C394E;
    margin: 0;
}

.container p {
    font-size: 18px;
    margin: 0;
}

.container-grid {
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
    display: grid;
    align-items: top;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
}

.container img {
    width: 100%;
    position: relative;
    translate: 0 -10%;
}

.primary {
    background-color: #0044F1;
    color: white;
    font-weight: bold;
    width: 12em;
    height: 2em;
    border-radius: 10px;
    text-align: center;
    align-content: center;
}

.container-plans {
    position: relative;
    display: flex;
    gap: 30px;
    justify-content: center;
    z-index: 2;
    translate: 0 -14vmax;
}

.card-plan {
    width: 25vmax;
    height: 30vmax;
    display: grid;
    padding-top: 3%;
    padding-bottom: 3%;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
}

.borde-azul {
    border-radius: 20px;
    border: solid 15px #0044F1;
}

.card-plan p {
    font-size: 16px;
    text-align: center;
}

.costo-plan {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 20px;
}

.costo-plan h2 {
    font-size: 2em;
    color: #669FF3;
}

.costo-plan h1 {
    font-size: 4em;
    color: #669FF3;
}

.costo-plan p {
    margin-left: 5px;
}

.opciones-plan {
    display: flex;
    justify-content: left;
    margin-top: 20px;
    gap: 5px;
}

.opciones-plan img {
    width: 25px;
    height: 25px;
}

.btn-plan {
    margin-top: 20%;
    background-color: #0044F1;
    text-align: center;
    align-content: center;
    color: white;
    height: 2.5em;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
}
</style>