<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import QuebraCabeca from "./components/QuebraCabeca/QuebraCabeca.vue";
import ButtonCommoConfirm from "./components/ButtonCommon/ButtonCommon.vue";
export default {
  name: "App",
  components: {
    QuebraCabeca,
  },
};
</script>

<template>
  <!-- <QuebraCabeca />
  <div>
    <button class="button-confirm">Confirmar</button>
  </div> -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
