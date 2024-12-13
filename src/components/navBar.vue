<script setup>
import {ref, watch} from "vue";
const isNavOpen = ref(false);
function openNav() {
    isNavOpen.value = true;
}
function closeNav() {
    isNavOpen.value = false;
}
function toggleNav() {
    isNavOpen.value = !isNavOpen.value;
}

watch(isNavOpen, (newValue) => {
    if(newValue) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
})
</script>
<template>

  <header class="header">
    <div class="logo">
      <img src="/logo.png" alt="logo">
    </div>
    <nav>
      <ul class="nav-links">
        <li><router-link class="links-class" exact-active-class="links" to="/allset/">Home</router-link></li>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/about">About Us</router-link></li>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/services">Services</router-link></li>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/contact">Contact</router-link></li>
      </ul>
    </nav>
      <router-link class="contact-btn" to="/allset/hireus">Hire Us</router-link>
      <button class="hamburguer" @click="toggleNav">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
      </button>
      <div :class="{'nav-active': isNavOpen}" class="menu">
          <button class="close-btn" @click="closeNav">&times;</button>
          <div class="menu-links" @click="closeNav">
              <router-link class="linksa" to="/allset/">Home</router-link>
              <router-link class="linksa" to="/allset/about">About Us</router-link>
              <router-link class="linksa" to="/allset/services">Services</router-link>
              <router-link class="linksa" to="/allset/contact">Contact</router-link>
              <router-link class="contact-btn" to="/allset/hireus">Hire Us</router-link>
              <button class="contact-btn">Contact Us</button>
          </div>

      </div>

  </header>
</template>
<style scoped>
.header {
    padding: 0.1vmax 0;
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header .logo {
    cursor: pointer;
    transition: all 0.5s;
}
.header .logo img {
    width: 10vmax;
    height: auto;
}
.header .logo:hover {
    transform: scale(1.2);
}
.header .nav-links {
    list-style: none;
}
.header .nav-links li {
    display: inline-block;
    padding: 0 1.5vmax 0 1.5vmax;
}
.header .nav-links a {
    font-size: 1.1vmax;
    color: black;
    transition: all 0.5s;
}
.header .nav-links a:hover {
    color: #0044F1;
    transform: scale(1.1);
}
.header .nav-links .links {
    color: #0044F1;
}
.header .contact-btn {
    width: 10vmax;
    height: 3.5vmax;
    background-color: #0044F1;
    color: white;
    border: none;
    position: relative;
    border-radius: 30em;
    overflow: hidden;
    align-content: center;
    text-align: center;
    font-weight: bold;
    z-index: 1;
}
.header .contact-btn::before {
    content: "";
    width: 0;
    height: 3.5vmax;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s ease;
    background: #669FF3;
    display: block;
    z-index: -1;
}
.header .contact-btn:hover::before {
    width: 10vmax;
}

.hamburguer {
    display: none;
    flex-direction: column;
    cursor: pointer;
    background-color: #3C394E;
    border-radius: 5px;
    border: none;
    padding: 1vmax;
}
.hamburguer:focus .line {
    background-color: #3C394E;
}
.hamburguer:focus {
    background-color: #669FF3;
}

.hamburguer .line {
    width: 2.5vmax;
    height: 0.2vmax;
    background-color: white;
    margin: 0.3vmax 0;
}

.nav-active {
    display: block !important;
}
.menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vmax;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
}
.menu .menu-links {
    height: 100%;
    display: flex;
    gap: 2vmax;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.menu .menu-links .linksa {
    font-size: 5vmax;
    font-weight: bold;
    color: white;
}
.menu .menu-links .linksa:hover {
    color: #669FF3;
}
.menu .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}
.menu .menu-contact{
    display: flex;
    background-color: #669FF3;
    justify-content: right;
}

@media (max-width: 768px) {
    .header {
        margin: 0 5%;
        display: none;
    }
    .nav-links {
        display: none;
    }
    .header .contact-btn {
        display: none;
    }
    .hamburguer {
        display: inherit;
    }
    .menu  .contact-btn{
        margin-top: 2vmax;
        display: inherit;
        width: 20vmax;
        height: 5vmax;
        align-items: center;
        justify-content: center;
    }
    .menu .contact-btn::before{
        width: 0;
        height: 5vmax;
    }
    .menu .contact-btn:hover::before{
        width: 20vmax;
    }

}
</style>