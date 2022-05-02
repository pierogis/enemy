import { Message } from "discord.js";

import { unequip } from "../systems/inventory";
import { getUser, getItem, setUser } from "../api";

export function equipCommand(message: Message) {
  let equiper = getUser(message.author.id);
  const [_, info] = message.content.split(" ", 2);
  const item = getItem(parseInt(info));

  ({ equiper } = unequip(equiper, item));

  setUser(equiper);
}
