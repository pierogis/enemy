import { Message } from "discord.js";

import { attackCommand } from "./attack";
import { unequipCommand } from "./unequip";
import { equipCommand } from "./equip";
import { misspeakCommand } from "./misspeak";

const commands: { [commandName: string]: (message: Message) => void } = {
  attack: attackCommand,
  unequip: unequipCommand,
  equip: equipCommand,
};

export function dispatch(message: Message) {
  const [commandName, ..._] = message.content.split(" ", 1);
  const command = commands[commandName.slice(1)] || misspeakCommand;
  command(message);
}
