import { Message } from "discord.js";

import { getUser, setUser, createUser } from "../api";
import { variables } from "../env";

import { attack } from "../systems/combat";
import { sendMessage } from "../helpers/message";

export async function attackCommand(message: Message) {
  let attacker = await getUser(message.author.id);
  if (!attacker) {
    attacker = await createUser({ discordId: message.author.id });
  }

  let attackee = await getUser(variables.enemyId);

  ({ attacker, attackee } = attack(attacker, attackee));

  setUser(attacker);
  setUser(attackee);

  sendMessage(message, "ouch", true);
}
