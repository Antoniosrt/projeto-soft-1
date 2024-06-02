<template>
  <div class="text-infos">
    {{ children }}
  </div>
</template>

<script>
export default {
  name: "InfoTextCommon",
  props: {
    children: String,
  },
};
</script>

<style scoped>
.text-infos {
  font-size: 2rem;
  color: inherit;
  margin-top: 1rem;
  padding: 0.4rem;
}
</style>
