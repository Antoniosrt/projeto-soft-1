<template>
  <div class="container mt-5">
    <h3>Cadastro de puzzle</h3>

    <div class="p-5">
      <FormularioCadastroPuzzle />
    </div>
  </div>
</template>

<script>
import FormularioCadastroPuzzle from "@/components/FormularioCadastroPuzzle/FormularioCadastroPuzzle.vue";

export default {
  name: "CadastroPuzzle",
  components: {
    FormularioCadastroPuzzle,
  },
  data() {
    return {};
  },
  methods: {
    voltar() {},
  },
};
</script>
