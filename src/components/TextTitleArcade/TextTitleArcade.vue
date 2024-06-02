<template>
  <p class="text-arcade">{{ msg.title }}</p>
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
  margin-top: 1rem;
}
</style>
