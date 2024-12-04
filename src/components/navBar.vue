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
        <li><router-link class="links-class" exact-active-class="links" to="/allset/services">Services</router-link></li>
        <li><router-link class="links-class" exact-active-class="links" to="/allset/blog">Blog</router-link></li>
      </ul>
    </div>
    <div class="opciones">
      <svg class="btn-buscar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <button class="contact">Contact Us</button>
    </div>
  </header>

</template>

<style scoped>
.navbar {
  display: flex;
  margin: 2em 5em 0 5em;
  align-items: center;
}

.logo {
  width: 12em;
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
  .navbar {
    margin: 1em 2em 0 2em;
  }

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
    visibility: collapse;
  }
}
</style>