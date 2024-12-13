<script setup>
import {onMounted, onBeforeMount,ref} from "vue";

const lastScrollTop = ref(0);
const logo = ref(null);

const handleScroll = () => {
    const cs = window.scrollY;
    if (logo.value) {
        if (!(cs === 0)) {
            logo.value.style.display = 'none';
        } else {
            logo.value.style.display = 'inherit';
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
    <div class="main">
        <div class="container-img" ref="logo">
            <img class="logo" src="/logo.png" alt="">
        </div>
        <div class="container-flex">
            <div>
                <router-link to="/allset/hireus">
                    Plans
                </router-link>
            </div>
            <div>
                <router-link to="/allset/about">
                    About Us
                </router-link>
            </div>
                <router-link class="links" exact-active-class="links-active" to="/allset/">
                    <i class="fa-solid fa-house"></i>
                    <div class="names">
                        <span>Home</span>
                    </div>
                </router-link>
            <div>
                <router-link class="links" exact-active-class="links-active" to="/allset/contact">
                    <i class="fa-solid fa-comment"></i>
                    <div class="names">
                        <span>Contact</span>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link to="/allset/services">
                    Services
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    display: none;
    padding: 0 0 1% 0;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 10;
}
.logo {
    width: 20%;
}
.container-img {
    display: flex;
}
.container-flex {
    display: flex;
    justify-content: space-around;
}
.container-flex .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #669FF3;
}
.container-flex .links .names {
    display: none;
}

.links-active {
    color: #3C394E;
}
.links-active .names {
    display: inherit;
}

.links i {
    font-size: 1.5rem;
}

@media (max-width: 768px) {
    .main {
        display: none;
        flex-direction: column;
    }
}
</style>