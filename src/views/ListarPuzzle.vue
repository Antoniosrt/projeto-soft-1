<template>
  <div class="container mt-5 table-dark">
    <h3>Lista de Puzzles</h3>
    <button class="btn btn-primary" @click="novoPuzzle">Novo Puzzle</button>
    <table class="table mt-3">
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
            <button class="btn btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListarPuzzle",
  data() {
    return {
      puzzles: [
        {
          idPuzzle: 1,
          titulo: "Quebra Cabeça",
          descricao: "Quebra cabeça de 4x4",
          nivel: 1,
        },
        {
          idPuzzle: 2,
          titulo: "Quebra Cabeça 2",
          descricao: "Quebra cabeça de 6x4",
          nivel: 1,
        },
      ],
    };
  },
  methods: {
    novoPuzzle() {
      this.$router.push({ name: "Puzzle" });
    },
  },
};
</script>
