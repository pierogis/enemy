import { Message } from "discord.js";

import { sendMessage } from "../helpers/message";

export function misspeakCommand(message: Message<boolean>) {
  sendMessage(message, "are you talking to me", true);
}
