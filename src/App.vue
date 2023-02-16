<template>
  <v-app>
    <AppBar
      @downloadChatMessages="() => $refs.chatRoom.downloadChatMessages()"
    />
    <ChatRoom ref="chatRoom" />
    <MessageArea
      @sendUserMessage="
        (userMessage) => $refs.chatRoom.addUserMessage(userMessage)
      "
    />
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
