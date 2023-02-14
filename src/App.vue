<template>
  <v-app>
    <v-main class="bg-grey-lighten-5">
      <AppBar />
      <ChatRoom ref="chatRoom" />
      <MessageArea
        @sendUserMessage="
          (userMessage) => $refs.chatRoom.addUserMessage(userMessage)
        "
      />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/core/AppBar.vue";
import MessageArea from "./components/core/MessageArea.vue";
import ChatRoom from "./components/core/ChatRoom.vue";

export default {
  name: "App",

  components: {
    AppBar,
    MessageArea,
    ChatRoom,
  },

  data: () => ({}),
};
</script>
