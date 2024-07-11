<template>
  <div class="container mt-5">
    <p class="h2">Cadastro de puzzle</p>

    <div class="p-5 bg-white text-black">
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
