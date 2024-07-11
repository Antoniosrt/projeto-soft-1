<template>
  <div on-touchstart="">
    <div class="botao-comum-site" @click="handleClick">
      <a class="text-white">{{ text }} </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ButtonCommoConfirm",
  props: {
    text: {
      type: String,
      required: true,
    },
    onClickAction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      console.log(this.onClickAction);
      this.onClickAction();
    },
  },
};
</script>

<style scoped></style>
