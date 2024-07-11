<template>
  <p class="text-arcade">{{ msg.titulo }}</p>
</template>

<script>
export default {
  name: "TextTitleArcade",
  props: {
    msg: Object,
  },
};
</script>

<style scoped>
.text-arcade {
  font-size: 2.6rem;
  font-family: "ArcadeClassic", sans-serif;
  color: #e66000;
}
</style>
