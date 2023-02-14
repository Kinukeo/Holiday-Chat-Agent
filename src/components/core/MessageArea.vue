<template>
  <!-- <v-footer style="height: fit content" class="bg-deep-orange-darken-1"> -->

  <v-textarea
    id="textarea"
    style="
      bottom: 0px;
      position: absolute;
      width: 100%;
      border: 1px solid black;
      border-radius: 5px;
    "
    v-model="userMessage"
    class="bg-white"
    append-inner-icon="mdi-send"
    @click:append-inner="emitUserMessage"
    @keydown.enter.prevent="emitUserMessage"
    no-resize
    rows="3"
  ></v-textarea>
</template>

<script>
export default {
  data() {
    return {
      userMessage: "",
    };
  },
  methods: {
    emitUserMessage() {
      this.$emit("sendUserMessage", this.userMessage);
      this.clearMessage();
    },
    clearMessage() {
      this.userMessage = "";
    },
  },
};
</script>
