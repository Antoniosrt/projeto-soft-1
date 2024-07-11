<template>
  <div>
    <TextTitleArcade :msg="{ title }" />
  </div>
  <div class="row d-flex flex-row">
    <div class="w-50">
      <QuebraCabeca />
    </div>
    <div class="w-50">
      <div class="text-infos">
        {{ text }}
      </div>
    </div>
    <div>
      <ButtonCommon text="Voltar" :onClickAction="goToHomePage" />
    </div>
  </div>
</template>

<script>
import TextTitleArcade from "@/components/TextTitleArcade/TextTitleArcade.vue";
import QuebraCabeca from "@/components/QuebraCabeca/QuebraCabeca.vue";
import ButtonCommon from "@/components/ButtonCommon/ButtonCommon.vue";
import { apiPlugin } from "@/components/utils/api";
export default {
  name: "PuzzlePage",
  components: {
    TextTitleArcade,
    ButtonCommon,
    QuebraCabeca,
  },
  data() {
    return {
      title: "Quebra-Cabeça",
      text: "Arraste as peças para montar a imagem.",
    };
  },
  beforeCreate() {
    //pega o id da query string e faz a requisição para pegar o puzzle
    console.log(this.$route.query.id);
    const res = apiPlugin.get(`/puzzle/${this.$route.query.id}`);
  },
  methods: {
    goToHomePage() {
      console.log("123");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped></style>
