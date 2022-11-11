<template>
  <div class="main">
    <p>Side ikke funnet</p>
    <img
      class="spin"
      src="https://cdn.discordapp.com/attachments/1022130798696091730/1039873094451462144/unknown.png"
    />
    <div class="tilbake">
      <nuxt-link to="/">Tilbake til start</nuxt-link>
    </div>
    <div class="height"></div>
  </div>
</template>
<style>
.height{
    height: 15vw;
}
.spin {
  transition: 10000ms;
}
.spin:hover {
  transform: rotate3d(0, 2, 0, 4500deg) scale(2);
}
.tilbake {
  color: lightblue;
}
html {
  background: #00223d;
}
.main {
  display: inline-block;
  background: #00223d;
  background: #00223d;
  color: white;
  font-size: 500%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
