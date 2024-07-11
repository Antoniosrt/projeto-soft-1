<template>
  <div class="container mt-5 table-dark">
    <h3>Lista de Puzzles</h3>
    <button class="btn btn-primary" @click="novoPuzzle">Novo Puzzle</button>
    <table class="bg-white text-black mt-3 table-lg">
      <thead>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Nível</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puzzle in puzzles" :key="puzzle.idPuzzle">
          <td>{{ puzzle.idPuzzle }}</td>
          <td>{{ puzzle.titulo }}</td>
          <td>{{ puzzle.descricao }}</td>
          <td>{{ puzzle.nivel }}</td>
          <td>
            <button class="btn btn-primary">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "ListarPuzzle",
  data() {
    return {
      puzzles: [
      ],
    };
},
  mounted() {
    this.carregarPuzzles();
  },
  methods: {
    novoPuzzle() {
      this.$router.push({ name: "Puzzle" });
    },
   async carregarPuzzles() {
      Swal.fire({
        title: "Carregando...",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
      //chamar a api
      const res = await this.$api().get("/puzzle").then((result) => {
        this.puzzles = result.data;
        Swal.close();

      }).catch((err) => {
          Swal.fire({
            title: "Erro ao carregar os puzzles!",
            icon: "error",
            confirmButtonText: "OK",
          });
      });
    },
  },
};
</script>
