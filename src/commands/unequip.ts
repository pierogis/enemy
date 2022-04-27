import { Message } from "discord.js";

import { equip } from "../systems/inventory";
import { getUser, getItem, setUser } from "../db";

export function unequipCommand(message: Message) {
  let equiper = getUser(message.author.id);
  const [_, info] = message.content.split(" ", 2);
  const item = getItem(parseInt(info));

  ({ equiper } = equip(equiper, item));

  setUser(equiper);
}
