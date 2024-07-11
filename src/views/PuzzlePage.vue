<template>
  <div class='h4 text-white mt-3'>
    Visitante: {{ this.$route.query.name }}. Tentativas: {{ this.$route.query.attempts }}
  </div>
  <div v-if="quebraCabeca.idPuzzle" class="mt-5 px-5">
    <div class="row d-flex flex-row">
      <div class=" metade-1">
        <QuebraCabeca :json="quebraCabeca" v-if="quebraCabeca.idPuzzle" @ganhou="onGanhou" />
        <div v-if="pularLivre">
          <ButtonCommon text="Pular" :onClickAction="ganhouNext" />
        </div>
      </div>
      <div class=" metade-2">
        <TextTitleArcade :msg="quebraCabeca" />

        <div class="text-infos p-3">
          {{ quebraCabeca.descricao }}
        </div>
      </div>
      <div class="row ">
        <div class="col-12 col-md-9">
          <ButtonCommon text="Voltar" :onClickAction="goToHomePage" />
        </div>
        <div class="col-12 col-md-3 ">
          <ButtonCommon v-if="ganhou" :onClickAction="ganhouNext" :text="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextTitleArcade from "@/components/TextTitleArcade/TextTitleArcade.vue";
import QuebraCabeca from "@/components/QuebraCabeca/QuebraCabeca.vue";
import ButtonCommon from "@/components/ButtonCommon/ButtonCommon.vue";
import { apiPlugin } from "@/components/utils/api";
import Swal from "sweetalert2";
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
      text: "Jogar novamente",
      quebraCabeca: {},
      ganhou: false,
      pularLivre: false,
      nextPuzzle: 0,
    };
  },
  mounted() {
    //pega o id da query string e faz a requisição para pegar o puzzle
    this.carregaPuzzle();
  },
  methods: {
    carregaPuzzle(){
      Swal.fire({
      title: "Carregando...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    const res = this.$api().get(`/puzzle/${this.$route.params.id}`).then((res) => {
      this.quebraCabeca = res.data;
      Swal.close();
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Erro ao carregar o puzzle",
        text: "Tente novamente mais tarde.",
      }).then(() => {
        this.$router.push("/");
      });
    });
    },
    goToHomePage() {
      this.$router.push("/");
    },
    onGanhou() {
      Swal.fire({
        title: "Parabéns!",
        text: "Você montou o quebra-cabeça!",
        icon: "success",
        confirmButtonText: "OK",
      });
      this.ganhou = true;
    },
    onPularLivre() {
      this.pularLivre = true;
    },
    async puzzleSortNumber(puzzles) {
      console.log(puzzles)
      const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
      if(puzzle.idPuzzle === this.quebraCabeca.idPuzzle){
         return this.puzzleSortNumber(puzzles);
      }
      this.nextPuzzle = puzzle.idPuzzle;
      return puzzle;
    },
    async ganhouNext() {
      //
          Swal.fire({
      title: "Carregando...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await this.$api().get("/puzzle").then(async (result) => {
              //sort puzzle
        const puzzles = result.data;
        const puzzle = await this.puzzleSortNumber(result.data);
      Swal.close();
      return puzzle;
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Erro ao carregar o puzzle",
        text: "Tente novamente mais tarde.",
      });
    });

    console.log(this.nextPuzzle)
    if(this.nextPuzzle != 0 && this.$route.query.attempts < 3 ){
      //converte para numero e soma
      let attemptsPlus = this.$route.query.attempts;
      attemptsPlus = parseInt(attemptsPlus) + 1;
      this.ganhou = false;
      this.$router.push({ name: "PuzzlePage", params: { id: this.nextPuzzle }, query: { name: this.$route.query.name, attempts:attemptsPlus  } }).then(() => {
        // location.reload(); //force reload
      });
      //force reload
    }else if(this.$route.query.attempts >= 3){
      Swal.fire({
        title: "Você ganhou!",
        text: "Você completou 3 quebra-cabeças e explorou o Geoparque.",
        icon: "success",
        confirmButtonText: "UHULLLL!",
      }).then(() => {
        this.$router.push("/");
      });
    }
    },
  },
  
};
</script>
<style scoped>
.metade-1 {
  /* margin-right: 10%; */
  width: 40%;
}

.metade-2 {
  /* margin-left: 10%; */
  width: 60%;
}

.text-infos {
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  text-align: justify;
  font-size: 1.2em;
}
</style>
