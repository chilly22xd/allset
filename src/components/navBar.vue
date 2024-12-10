<script setup>

</script>

<template>

  <header class="navbar">
    <div class="contlogo">
      <img class="logo" src="/logo.png" alt="Allset">
    </div>
    <div class="menu">
      <ul>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/">Home</router-link></li>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/about">About Us</router-link></li>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/services">Services</router-link>
        </li>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/blog">Blog</router-link></li>
      </ul>
    </div>
    <div class="opciones">
      <button class="contact">Contact Us</button>
    </div>
  </header>

</template>

<style scoped>
.navbar {
  display: flex;
  margin: 10px 10% 0% 10%;
  align-items: center;
}

.logo {
  width: 10em;
  height: auto;
  transition: 0.3s;
}

.logo:hover {
  transform: scale(1.2);
}

.links-class {
  color: black;
  text-decoration: none;
}

.links-class:hover {
  color: #669FF3;
}

.links {
  color: #0044F1;
}

.menu {
  flex: 1;
}

.menu ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

.menu li {
  padding: 2em;
}

.opciones {
  display: flex;
  justify-content: right;
  align-items: center;
}

.btn-buscar {
  width: 2em;
  fill: white;
  background-color: gray;
  padding: 12px;
  border-radius: 30em;
}

.contact {
  width: 12em;
  height: 4em;
  margin: 5px;
  background-color: #0044F1;
  color: white;
  border: none;
  position: relative;
  border-radius: 30em;
  overflow: hidden;
  z-index: 1;
}

.contact::before {
  content: "";
  width: 0;
  height: 4em;
  border-radius: 30em;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease;
  background: #669FF3;
  display: block;
  z-index: -1;
}

.contact:hover::before {
  width: 12em;
}

@media screen and (max-width: 1024px) {

  .logo {
    width: 9em;
  }

  .menu {
    font-size: 15px;
  }

  .contact {
    width: 10em;
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }

  .logo {
    width: 6em;
  }

  .contlogo {
    flex-basis: 100%;
  }

  .menu {
    font-size: 15px;
  }

  .menu ul {
    padding: 0;
  }

  .menu li {
    padding: 10px;
  }

  .opciones {
    display: none;
  }
}
</style>