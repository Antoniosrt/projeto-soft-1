<template>
  <form>
    <div class="form-group">
      <label for="titulo">Título</label>
      <input type="text" class="form-control" id="titulo" v-model="titulo" />
    </div>
    <div class="form-group mt-2">
      <label for="descricao">Descrição</label>
      <textarea
        class="form-control"
        id="descricao"
        v-model="descricao"
      ></textarea>
    </div>
    <div class="form-group mt-2">
      <label for="imagem">Imagem</label>
      <input
        type="file"
        class="form-control"
        id="imagem"
        @change="onFileChange"
      />
    </div>
    <div class="form-group mt-2">
      <label for="nivel">Nível</label>
      <select class="form-control" id="nivel" v-model="nivel">
        <option value="1">Fácil</option>
        <option value="2">Médio</option>
        <option value="3">Difícil</option>
      </select>
    </div>
    <button class="btn btn-secondary mt-2 me-3" @click="voltar">Voltar</button>

    <button type="button" class="btn btn-primary mt-2" @click="salvarPuzzle">
      Salvar
    </button>
  </form>
</template>
<script>
export default {
  name: "FormularioCadastroPuzzle",
  data() {
    return {
      titulo: "",
      descricao: "",
      imagemBase64: "",
      nivel: 1,
    };
  },
  methods: {
    async salvarPuzzle() {
      const puzzle = {
        titulo: this.titulo,
        descricao: this.descricao,
        imagemBase64: this.imagemBase64,
        nivel: this.nivel,
      };
      console.log(puzzle);
      await this.$store.dispatch("puzzle/salvarPuzzle", puzzle);
      this.$router.push({ name: "QuebraCabeca" });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagemBase64 = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    voltar() {
      this.$router.push({ name: "PuzzleList" });
    },
  },
};
</script>
