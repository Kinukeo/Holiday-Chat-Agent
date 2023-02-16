<template>
  <v-app-bar class="bg-deep-orange-darken-1" density="compact">
    <v-app-bar-title>Chat Agent</v-app-bar-title>
    <template v-slot:append>
      <v-btn @click="$emit('downloadChatMessages')"> Save logs! </v-btn>
    </template>
  </v-app-bar>
</template>
