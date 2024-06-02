<template>
  <div>
    <TextTitleArcade :msg="{ title }" />
    <InfoTextCommon :children="{ text }" />
  </div>
</template>

<script>
import TextTitleArcade from "@/components/TextTitleArcade/TextTitleArcade.vue";
import InfoTextCommon from "../InfoTextCommon/InfoTextCommon.vue";
export default {
  name: "TextCommonModel",
  components: {
    TextTitleArcade,
    InfoTextCommon,
  },
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped></style>
