<template>
    <p>Tekst: {{text}}</p>
</template>

<script>
export default {
  data() {
    return {
      text: params.get('text')
    }
  }
}

let url = "https://uselessfacts.jsph.pl/random.json?language=en";

let params = (new URL(url)).searchParams;
let text = params.get('text');
console.log(text)

</script>
