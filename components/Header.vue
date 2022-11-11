<template>
<div class="keyboard">
  <div class="keyboard--inner">
    <div class="key">
      <nuxt-link to="/"><div class="key-cotnent">Hjem</div></nuxt-link>
    </div>
    <div class="key">
      <nuxt-link to="/random"><div class="key-cotnent">Random Fakta</div></nuxt-link>
    </div>
	<div class="key">
      <nuxt-link to="/placeholder"><div class="key-cotnent">Placeholder</div></nuxt-link>
    </div>
  </div>
</div>
</template>

<style scoped>
.keyboard {
	 --radius: 4vmin;
	 --red: #ff6464;
	 --green: #64c864;
	 --blue: #6464ff;
}
 .keyboard:after {
	 content: '';
	 height: 100vh;
	 width: 1.2vw;
	 bottom: 100%;
	 position: absolute;
	 left: 50%;
	 transform: translateX(-50%);
	 background: linear-gradient(to left, #111, #222, #111, #111);
	 box-shadow: -0.4vmin 0 1vmin #111;
}
 .keyboard:before {
	 content: "";
	 position: absolute;
	 top: calc(100% + 1.2vmin);
	 left: 0;
	 width: 100%;
	 text-align: center;
	 color: #3a3a3a;
	 font-size: 1.5vmin;
}
 .keyboard--inner {
	 display: flex;
	 gap: 1vmin;
	 padding: 0.75vmin 1vmin 1vmin;
	 overflow: hidden;
	 background-color: #222;
	 box-shadow: 0 0.5vmin rgba(0, 0, 0, 1) inset;
}
 .keyboard--inner .key {
	 width: 100vmin;
	 height: 9vmin;
	 padding: 0.6vmin 0.6vmin 0.9vmin;
	 top: 0.5vmin;
	 position: relative;
	 overflow: hidden;
	 transform: translate3d(0, 0, 0);
	 animation: shadow 5s -0.5s linear infinite;
	 --delay: 0;
}
 .keyboard--inner .key:nth-child(1n + 1) {
	 --delay: 0.2s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 1) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 2) {
	 --delay: 0.4s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 2) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 3) {
	 --delay: 0.6s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 3) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 4) {
	 --delay: 0.8s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 4) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 5) {
	 --delay: 1s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 5) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 6) {
	 --delay: 1.2s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 6) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 7) {
	 --delay: 1.4s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 7) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 8) {
	 --delay: 1.6s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 8) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 9) {
	 --delay: 1.8s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 9) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 10) {
	 --delay: 2s;
	 animation: shadow 5s calc(-0.5s + var(--delay)) linear infinite;
}
 .keyboard--inner .key:nth-child(1n + 10) .key-cotnent {
	 animation: color 5s calc(-0.5s + var(--delay)) linear infinite;
}
 @keyframes shadow {
	 0% {
		 box-shadow: 0 0 5vmin -2vmin var(--red);
	}
	 33% {
		 box-shadow: 0 0 5vmin -2vmin var(--blue);
	}
	 66% {
		 box-shadow: 0 0 5vmin -2vmin var(--green);
	}
	 100% {
		 box-shadow: 0 0 5vmin -2vmin var(--red);
	}
}
 .keyboard--inner .key:before {
	 content: '';
	 width: 400vmin;
	 height: 400vmin;
	 position: absolute;
	 top: 150%;
	 left: 150%;
	 transform: translate(-50%, -50%);
	 background: conic-gradient(var(--red), var(--green), var(--blue), var(--red));
	 animation: spin 5s var(--delay) linear infinite;
}
 @keyframes spin {
	 from {
		 transform: translate(-50%, -50%) rotate(0deg);
	}
	 to {
		 transform: translate(-50%, -50%) rotate(360deg);
	}
}
 .keyboard--inner .key .key-cotnent {
	 width: 100%;
	 height: 100%;
	 background-color: #111;
	 position: relative;
	 font-size: 3vmin;
	 top: -0.3vmin;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 color: #fff;
	 z-index: 1;
	 cursor: pointer;
	 user-select: none;
	 box-shadow: 0 0.6vmin rgba(0, 0, 0, 0.6);
	 transition: top 0.1s ease-in-out, box-shadow 0.1s ease-in-out, background-color 0.1s ease-in-out;
}
 .keyboard--inner .key .key-cotnent:active {
	 top: 0vmin;
	 box-shadow: 0 0.3vmin rgba(0, 0, 0, 0.6);
	 background-color: rgba(17, 17, 17, 0.9);
}
 @keyframes color {
	 0% {
		 color: var(--red);
	}
	 33% {
		 color: var(--blue);
	}
	 66% {
		 color: var(--green);
	}
	 100% {
		 color: var(--red);
	}
}
 

</style>