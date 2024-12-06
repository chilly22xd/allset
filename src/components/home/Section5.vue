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
            <p data-aos="fade-up" class="primary">Price Package</p>
            <div class="container-grid">
                <h1 data-aos="fade-up">Choose Your Perfect Clean</h1>
                <div class="container-img">
                    <img data-aos="fade-down" src="/src/assets/REGALO.png" alt="">
                </div>
                <p data-aos="fade-up">Explore our range of meticulously curated cleaning
                    packages designed to meet your unique needs.
                </p>
            </div>
            <div class="container-plans">
                <div data-aos="fade-up" v-for="plan in arrayPlans"
                    :class="['card-plan', { 'borde-azul': plan.plan === 'Standard Plan' }]">
                    <p>{{ plan.plan }}</p>
                    <div class="costo-plan">
                        <h2>$</h2>
                        <h1 data-aos="fade-right">{{ plan.costo }}</h1>
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
    padding: 2vmax 11% 0 11%;
}

.container {
    display: grid;
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
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
}

.container-img {
    display: flex;
    justify-content: center;
}

.container-img img {
    width: 22vmax;
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
    margin: 0;
    position: relative;
    display: flex;
    gap: 20px;
    justify-content: center;
    z-index: 2;
    translate: 0 -8vmax;
}

.card-plan {
    width: 15vmax;
    display: grid;
    padding: 1vmax 5% 1vmax 5%;
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
    font-size: 3.5em;
    color: #669FF3;
}

.costo-plan p {
    margin-left: 5px;
}

.opciones-plan {
    display: flex;
    justify-content: left;
    margin-top: 0.7vmax;
    gap: 10px;
}

.opciones-plan p {
    text-align: left;
    font-size: 1vmax;
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