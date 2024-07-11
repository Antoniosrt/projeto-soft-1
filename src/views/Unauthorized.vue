<template>
  <div class="container text-center">
    <h1>Sem permissão para acessar esta rota!</h1>
  </div>
</template>

<script>
export default {
  name: "Unauthorized",
  data() {
    return {};
  },
  methods: {
    voltar() {
      this.$router.push("/");
    },
  },
};
</script>
