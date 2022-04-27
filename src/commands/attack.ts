import { Message } from "discord.js";

import { getUser, setUser, createUser } from "../db";
import { variables } from "../env";

import { attack } from "../systems/combat";
import { sendMessage } from "../helpers/message";

export function attackCommand(message: Message) {
  let attacker = getUser(message.author.id);
  if (!attacker) {
    attacker = createUser({ id: message.author.id });
  }

  let attackee = getUser(variables.enemyId);

  ({ attacker, attackee } = attack(attacker, attackee));

  setUser(attacker);
  setUser(attackee);

  sendMessage(message, "ouch", true);
}
