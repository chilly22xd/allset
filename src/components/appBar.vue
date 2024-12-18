<script setup>
import { ref, onMounted, onBeforeMount } from "vue";

const lastScrollTop = ref(0);
const app_bar = ref(null);

const handleScroll = () => {
    const cs = window.scrollY;
    if (app_bar.value) {
        if (!(cs === 0)) {
            app_bar.value.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)"
            app_bar.value.style.backgroundColor = "whitesmoke";
        } else {
            app_bar.value.style.boxShadow = "none"
            app_bar.value.style.backgroundColor = "transparent"
        }
    }
    lastScrollTop.value = cs;
}

function menuDesplegable() {
    const menu = document.querySelector(".menu-desplegable");
    const ham = document.querySelector(".ham");
    const close = document.querySelector(".close");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        ham.style.display = "inherit";
        close.style.display = "none";
    } else {
        menu.style.display = "flex";
        ham.style.display = "none";
        close.style.display = "inherit";
        // Debe coincidir con la duración de la animación
    }
}
function closeMenu() {
    const menu = document.querySelector(".menu-desplegable");
    const ham = document.querySelector(".ham");
    const close = document.querySelector(".close");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        ham.style.display = "inherit";
        close.style.display = "none";
    }
}
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})
onBeforeMount(() => {
    window.removeEventListener("scroll", handleScroll);
})


</script>

<template>
    <div class="main">
        <div ref="app_bar" class="app-bar">
            <img src="/logo.png">
            <button class="bars" @click="menuDesplegable">
                <i class="fa-solid fa-bars ham"></i>
                <i class="fa-solid fa-xmark close"></i>
            </button>
        </div>
        <div class="menu-desplegable">
            <router-link class="opciones" to="/allset/about" exact-active-class="active" @click="closeMenu">
                <i class="fa-solid fa-circle-info icons"></i>
                <p>About Us</p>
            </router-link>
            <div>
                <router-link class="opciones" to="/allset/services" exact-active-class="active" @click="closeMenu">
                    <i class="fa-solid fa-screwdriver-wrench icons"></i>
                    <p>Services</p>
                </router-link>
            </div>
            <div>
                <router-link class="opciones" to="/allset/contact" exact-active-class="active" @click="closeMenu">
                    <i class="fa-solid fa-comment icons"></i>
                    <p>Contact</p>
                </router-link>
            </div>
            <div>
                <router-link class="opciones" to="/allset/hireus" exact-active-class="active" @click="closeMenu">
                    <i class="fa-solid fa-tags icons"></i>
                    <p>Hire Us</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 0;
    position: sticky;
    display: none;
    z-index: 10;
}

.app-bar {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
}

.app-bar img {
    max-width: 10vmax;
}

.bars {
    padding: 0.5rem;
    font-size: 1.5rem;
    background: none;
    border: none;
}

.menu-desplegable {
    margin: 0.5rem;
    padding: 0.5rem;
    display: none;
    flex-direction: column;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
}

.opciones {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding-left: 1rem;
    color: #3C394E;
}

.opciones p {
    font-size: 1rem;
    font-weight: bold;
}

.opciones i {
    font-size: 1.5rem;
}

.ham {
    display: inherit;
}

.close {
    display: none;
}

.active {
    color: #669FF3;
}

@media (max-width: 728px) {
    .main {
        display: inherit;
    }
}
</style>