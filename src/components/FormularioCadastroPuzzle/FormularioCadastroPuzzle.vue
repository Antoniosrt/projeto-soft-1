<template>
  <form>
    <div class="form-group">
      <label for="titulo">Título</label>
      <input type="text" class="form-control" id="titulo" v-model="titulo" />
    </div>
    <div class="form-group mt-2">
      <label for="descricao">Descrição</label>
      <textarea class="form-control" id="descricao" v-model="descricao"></textarea>
    </div>
    <div class="form-group mt-2">
      <label for="imagem">Imagem</label>
      <input type="file" class="form-control" id="imagem" ref="imagemBase64" multiple />
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
import Swal from "sweetalert2";
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
      let dataForm = new FormData();
      dataForm.append("titulo", this.titulo);
      dataForm.append("descricao", this.descricao);
      dataForm.append("imagem", this.$refs.imagemBase64.files[0]);
            // const puzzle = {
      //   titulo: this.titulo,
      //   descricao: this.descricao,
      //   imagem: this.imagemBase64,
      //   // nivel: this.nivel,
      // };
      // await this.$store.dispatch("puzzle/salvarPuzzle", puzzle);
      //loading
      Swal.fire({
        title: "Salvando...",
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await this.$api().post("/puzzle", dataForm,
        { headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then((result) => {
          Swal.fire({
            title: "Puzzle cadastrado com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            this.$router.push({ name: "PuzzleList" });
          });
      }).catch((err) => {
        Swal.fire({
          title: "Erro ao cadastrar o puzzle!",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
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
