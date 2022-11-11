<template>
  <div class="background">
    <div class="backdrop">
      <div class="item1"><h1 class="text">hello1</h1></div>
      <div class="item2"><h1>hello2</h1></div>
      <div class="item3"><h1>hello3</h1></div>
    </div>
  </div>
</template>
<style>
.background {
  width: 100%;
  height: 100vw;
  position: relative;
}
.backdrop {
  width: 100%;
  display: inline-block;
  position: absolute;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-around;
  top: 10%;
}
.item1 {
  width: 25vw;
  height: 40vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-image: linear-gradient(180deg, rgb(0, 238, 255), rgb(204, 0, 255));
  border-radius: 5vw;
  transition: transform 0.5s, box-shadow 0.5s;
}

.item2 {
  width: 25vw;
  height: 40vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-image: linear-gradient(100deg, rgb(255, 0, 221), rgb(204, 0, 255));
}

.item3 {
  width: 25vw;
  height: 40vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-image: linear-gradient(10deg, rgb(255, 0, 221), rgb(204, 0, 255));
  border-radius: 3vw;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 5vw;
}
.text {
  text-align: center;
}

.item1:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 12px;
  transform: scale(105%);
}
.item2:hover {
  transform: rotate(5deg);
}
.item3:hover {
  transform: rotate(-3deg);
}
</style>
