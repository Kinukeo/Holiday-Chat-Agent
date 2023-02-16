<template>
  <NameDialog @addUserName="(addUserName) => (userName = addUserName)" />
  <div
    style="
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      max-height: 76vh;
    "
    class="ma-3"
  >
    <!-- <v-list :items="items"></v-list> -->
    <div
      v-for="item in items"
      style="display: flex"
      :style="
        item.sender !== 'First Holiday' ? 'justify-content: flex-end;' : ''
      "
    >
      <v-card
        style="
          margin-top: 10px;
          width: fit-content;
          word-wrap: break-word;
          max-width: 60vw;
        "
        density="compact"
        :color="
          item.sender !== 'First Holiday'
            ? 'deep-orange-darken-1'
            : 'grey-lighten-2'
        "
        size="x-large"
        :text="item.content"
        :subtitle="item.sender"
      >
      </v-card>
    </div>
  </div>
</template>

<script>
import MessageService from "../../services/messageService";
import NameDialog from "./NameDialog.vue";

export default {
  components: {
    NameDialog,
  },
  data() {
    return {
      userName: "",
      items: [
        {
          content:
            "Thank you for choosing First Holiday LTD. Would you prefer a lazy or active holiday?",
          sender: "First Holiday",
        },
      ],
    };
  },
  methods: {
    async addUserMessage(userMessage) {
      this.items.push({ content: userMessage, sender: this.userName });
      const resp = await MessageService.sendMessage({
        sender: this.userName,
        content: userMessage,
      });
      this.addAgentMessage(resp.data);
    },
    addAgentMessage(agentMessage) {
      this.items.push({ content: agentMessage, sender: "First Holiday" });
    },
    addUserName() {},
  },
};
</script>
