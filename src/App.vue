<script setup>
import navBar from './components/navBar.vue'
</script>

<template>
  <navBar/>
  <div>
    <router-view></router-view>
  </div>
  <div class="floating">
    <button class="floating-button">Contact Us</button>
  </div>

</template>

<style scoped>
.floating{
  visibility: collapse;
  position: fixed;
  display: flex;
  bottom: 1em;
  right: 1em;
}
.floating-button {
  position: relative;
  background-color: #0044F1;
  color: white;
  border: none;
  border-radius: 30em;
  width: 9em;
  height: 3em;
  overflow: hidden;
  font-size: 16px;
  z-index: 1;
}

.floating-button::before{
  content: "";
  width: 0;
  height: 3em;
  border-radius: 30em;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s ease;
  background: #669FF3;
  display: block;
  z-index: -1;
}
.floating-button:hover::before{
  width: 9em;
}
@media screen and (max-width: 480px){
  .floating{
    visibility: visible;
  }
}
</style>
