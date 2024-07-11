<template>
  <div class="container text-center h-100 mt-5 flex w-max ">
    <div class=" align-items-center content-center justify-center text-center w-max flex-col">
      <h1 class="text-4xl font-bold h1">Acesso não autorizado!</h1>
      <div class="mt-5 justify-center flex">
        <img width='400' height="400" src="../assets/ilustracao-curupira-desenhada-a-mao.png"
          alt="Gif de um gato com a pata levantada" />
      </div>
      <h1 class="h1">"Arreta o pé VACILÃO. Aqui só entra quem tem a passagem liberada!"</h1>
      <div class="mt-5">
        <h5 class="h5">Parece que você se perdeu e o Curupira te achou, eu recomendo: </h5>
        <button @click="voltar" class="btn btn-error btn-lg mt-3">
          SAIR CORRENDO!
        </button>
      </div>
      <div class="text-small mt-5">
        *Caso você tenha alguma dúvida, entre em contato com o administrador do sistema.*
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Unauthorized",
  data() {
    return {};
  },
  methods: {
    voltar() {
      Swal.fire({
        title: "Ufa que susto!",
        text: "Parece que ele não esta mais nos seguindo, estamos seguros!",
        confirmButtonText: "OQ Q FOI ISSO?!",
      });
      this.$router.push("/");
    },
  },
};
</script>
