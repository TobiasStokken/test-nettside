<template>
  <div class="randomFact">
    <div class="dailyRandomButton">
      <button @click="dailyRandomFact()">Daglig/Random Fakta</button>
    </div>
    <div class="refreshButton">
      <button @click="refresh()">Ny fakta</button>
    </div>
    <div v-if="randomFact" class="title">En ubrukelig fakta er:</div>
    <div v-if="randomFact" class="fact">{{ postsRandom.text }}</div>
    <div v-if="dailyFact" class="title">Den daglige faktaen er:</div>
    <div v-if="dailyFact" class="fact">{{ postsDaily.text }}</div>
    <p>(Hvis du trykker refresh for fort stopper den å funke)</p>
  </div>
</template>

<style>
p {
  display: flex;
  justify-content: center;
}
.title {
  display: flex;
  justify-content: center;
  font-size: 300%;
}
.fact {
  display: flex;
  font-size: 150%;
  justify-content: center;
}
.dailyRandomButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 200%;
  align-items: center;
  font-weight: 500;
}
.refreshButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 150%;
  align-items: center;
  font-weight: 500;
}
</style>

<script>
export default {
  data() {
    return {
      randomFact: true,
      dailyFact: false,
      postsRandom: [],
      postsDaily: [],
    };
  },

  methods: {
    refresh() {
      window.location.reload();
    },
    dailyRandomFact() {
      if (this.randomFact == true) {
        this.randomFact = false;
        this.dailyFact = true;
      } else if (this.dailyFact == true) {
        this.dailyFact = false;
        this.randomFact = true;
      }
    },

    async getData() {
      let responseRandom = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      this.postsRandom = await responseRandom.json();

      let responseDaily = await fetch(
        "https://uselessfacts.jsph.pl/today.json?language=en"
      );
      this.postsDaily = await responseDaily.json();
    },
  },

  created() {
    this.getData();
  },
};
</script>
