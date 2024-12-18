<script setup>

</script>
<template>

  <header ref="navbar" class="header">
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

@media screen and (max-width: 768px) {
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

}
</style>