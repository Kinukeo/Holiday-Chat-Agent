<template>
  <div style="display: flex; flex-direction: column" class="ma-3">
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
export default {
  data() {
    return {
      items: [{ content: "Foo", sender: "First Holiday" }],
    };
  },
  methods: {
    addUserMessage(userMessage) {
      this.items.push({ content: userMessage, sender: "You" });
    },
  },
};
</script>
