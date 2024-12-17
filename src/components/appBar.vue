<script setup>
import {onMounted, onBeforeMount,ref} from "vue";

const lastScrollTop = ref(0);
const logo = ref(null);
const bar = ref(null);

const handleScroll = () => {
    const cs = window.scrollY;
    if (logo.value) {
        if (!(cs === 0)) {
            logo.value.style.display = 'none';
            if (bar.value){
                bar.value.style.position = 'fixed';
            }
        } else {
            logo.value.style.display = 'inherit';
            if (bar.value){
                bar.value.style.position = '';
            }
        }
    }
    lastScrollTop.value = cs;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})
onBeforeMount(() => {
    window.removeEventListener("scroll", handleScroll);
})
</script>

<template>
    <div ref="bar" class="main">
        <div class="container-logo" ref="logo">
            <h1>Allset</h1>
            <p>cleaning services</p>
        </div>
        <div class="container-grid">
            <div class="container-flex">
                <router-link class="links" to="/allset/" exact-active-class="active">
                    <i class="fa-solid fa-house icons"></i>
                    <div class="line"></div>
                </router-link>
            </div>
            <div class="container-flex">
                <router-link class="links" to="/allset/about" exact-active-class="active">
                    <i class="fa-solid fa-circle-info icons"></i>
                    <div class="line"></div>
                </router-link>
            </div>
            <div class="container-flex">
                <router-link class="links" to="/allset/services" exact-active-class="active">
                    <i class="fa-solid fa-screwdriver-wrench icons"></i>
                    <div class="line"></div>
                </router-link>
            </div>
            <div class="container-flex">
                <router-link class="links" to="/allset/contact" exact-active-class="active">
                    <i class="fa-solid fa-comments icons"></i>
                    <div class="line"></div>
                </router-link>
            </div>
            <div class="container-flex">
                <router-link class="links" to="/allset/hireus" exact-active-class="active">
                    <i class="fa-solid fa-tags icons"></i>
                    <div class="line"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 0 1vmax;
    margin: 0;
    display: none;
    background-color: white;
    z-index: 10;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.container-logo {
    padding: 1%;
    display: flex;
    align-items: baseline;
    gap: 5px;
}
.container-logo h1 {
    margin: 0;
    font-family: 'Century Gothic', serif;
    color: #0044F1;
    font-weight: bold;
    font-size: 1.2rem;
}
.container-logo p {
    margin: 0;
    font-size: 0.6rem;
}
.container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
    align-items: center;
}
.container-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.links {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.icons {
    font-size: 4vmax;
    color: #3C394E;
}
.icons:hover {
    transform: scale(1.1);
}
.line {
    display: none;
    padding: 2px;
    border-radius: 10px;
    background-color: #669FF3;
}

.active{
    color: #669FF3;
}
.active .icons {
    color: #669FF3;
}
.active .line {
    display: inherit;
}
@media (max-width: 768px) {
    .main {
        display: flex;
        flex-direction: column;
    }
}
</style>