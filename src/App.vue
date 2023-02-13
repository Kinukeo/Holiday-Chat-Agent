<template>
  <v-app>
    <v-main class="bg-grey-lighten-5">
      <AppBar />
    </v-main>
    <ChatArea />
  </v-app>
</template>

<script>
import AppBar from "./components/core/AppBar.vue";
import ChatArea from "./components/core/MessageArea.vue";

export default {
  name: "App",

  components: {
    AppBar,
    ChatArea,
  },

  data: () => ({
    //
  }),
};
</script>
