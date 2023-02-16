<template>
  <v-dialog v-model="dialog" class="w-50" persistent>
    <v-card class="text-center">
      <v-card-text> Please enter your name. </v-card-text>
      <v-form @submit.prevent="" ref="form" v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="userName"
                :rules="userNameRules"
                label="Name"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-btn type="submit" @click="emitAddUserName" color="black"
                >Confirm</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      userName: "",
      userNameRules: [
        (value) => {
          if (value) return true;

          return "Please enter your name.";
        },
      ],
    };
  },
  methods: {
    emitAddUserName() {
      this.$emit("addUserName", this.userName);
      this.dialog = false;
    },
  },
};
</script>
