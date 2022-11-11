<template>
  <div class="randomFact">
    <div class="buttons">
      <button class="dailyRandomButton" @click="dailyRandomFact()">
        Daglig/Random Fakta
      </button>
    </div>
    <div class="buttons">
      <button class="refreshButton" @click="refresh()">Ny fakta</button>
    </div>
    <div class="tekst">
      <div v-if="randomFact" class="title">En ubrukelig fakta er:</div>
      <div v-if="randomFact" class="fact">
        {{ postsRandom.text }}
        <div v-if="!postsRandom.text">Du trykket ny fakta for fort, ro ned å prøv igjen snart :)</div>
      </div>
      <div v-if="dailyFact" class="title">Den daglige faktaen er:</div>
      <div v-if="dailyFact" class="fact">
        {{ postsDaily.text }}
        <div v-if="!postsDaily.text">Feil</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tekst{
  text-align: center;
}
.randomFact {
  background: #00223d;
  color: white;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
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
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dailyRandomButton {
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  border: 2px solid lightblue;
  font-size: 200%;
  font-weight: 500;
  transition: 500ms;
}
.dailyRandomButton:hover {
  background-color: lightblue;
}
.refreshButton {
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid lightblue;
  font-size: 150%;
  font-weight: 500;
  transition: 500ms;
}
.refreshButton:hover {
  background-color: lightblue;
}
</style>

<script>
export default {
  data() {
    return {
      randomFact: true,
      dailyFact: false,
      postsRandom: { text: "" },
      postsDaily: {},
    };
  },

  methods: {
    refresh() {
      this.getDataRandom();
    },
    dailyRandomFact() {
      if (this.randomFact) {
        this.randomFact = false;
        this.dailyFact = true;
      } else if (this.dailyFact) {
        this.dailyFact = false;
        this.randomFact = true;
      }
    },
    getDataRandom() {
      fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then((response) => response.json())
        .then((data) => {
          this.postsRandom = data;
          this.$store.commit("nyFact", data.text);
          console.log("Success:", data, this.postsRandom);
        })
        .catch((error) => {
          console.error("Error:", error);
          this.postsRandom = {};
        });
    },
    getDataDaily() {
      fetch("https://uselessfacts.jsph.pl/today.json?language=en")
        .then((response) => response.json())
        .then((data) => {
          this.postsDaily = data;
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
          this.postsDaily = {};
        });
    },
  },

  mounted() {
    this.getDataDaily();
    this.postsRandom = { text: this.$store.getters["getFact"] };
    if (this.postsRandom.text === "") {
      this.getDataRandom();
    }
    console.log(this.$store.getters["getFact"]);
  },
};
</script>
