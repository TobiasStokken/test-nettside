<template>
  <div class="alt">
    <div>Her kan du google ting</div>
    <div class="inputdiv">
      <input class="input" v-model="tekst" type="text" />
    </div>
    <div class="googleButton">
      <button v-on:click="google()">Google</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tekst: "e",
    };
  },
  methods: {
    google() {
      console.log("https://google.com/" + this.tekst);
      window.location.replace("https://www.google.com/search?q=" + this.tekst);
    },
  },
};
</script>

<style>
.alt {
  transform: translate(-50, -50);
  background: #00223d;
  font-size: 500%;
  display: flex;
  color: white;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.inputdiv {
  transition: transform 0.5s;
  font-size: 50%;
  color: black;
}
.input {
  border-radius: 2vh;
}
</style>
