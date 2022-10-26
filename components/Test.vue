<template>
  <div class="test">
    <div class="test3">Hei</div>
    <div>
      <input v-model="tekst" class="test2" type="text">
    </div>
  <div class="test4"><h1>{{ tekst.split('').reverse().join('') }}</h1></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tekst: ''
    }
  }
}
</script>


<style scoped>

.test {
  left: 50%;
  top: 50;
    display: inline-block;
  transform: translate(-50,-50);

}
.test2:hover{
    transform: scale(105%);
    transition: transform 0.5s;
    
}
.test2 {
  font-size: 50%;
  color: black;
  border-radius: 50vh;
}
.test3{
    display: flex;
    justify-content: center;
}
.test4{
    display: flex;
    justify-content: center;
}
</style>
