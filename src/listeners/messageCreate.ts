import type { Client, Message } from "discord.js";

import { dispatch } from "../commands";
import { sendMessage } from "../helpers/message";

export default (client: Client): void => {
  client.once("messageCreate", (message: Message) => {
    if (message.content.startsWith("$")) {
      dispatch(message);
    }

    if (Math.random() < 0.2) {
      sendMessage(message, "logeed in");
    }
  });
};
