import { Message } from "discord.js";

import { equip } from "../systems/inventory";
import { getItem, getUser, getUserInventory, setUserInventory } from "../api";

export async function unequipCommand(message: Message) {
  const user = await getUser(message.author.id);
  let inventory = await getUserInventory(user);

  const [_, info] = message.content.split(" ", 2);
  const item = getItem(parseInt(info));

  ({ inventory } = equip(inventory, item));

  await setUserInventory(user, inventory);
}
