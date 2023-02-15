import axios from "axios";

export default {
  async sendMessage(message) {
    try {
      var resp = await axios({
        method: "POST",
        url: "https://localhost:7231/api/Message/UserMessage",
        responseType: "json",
        Headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          accept: "text/plain",
        },
        data: message,
      });
      console.log(resp);
      return resp;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
