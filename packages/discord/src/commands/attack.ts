import { Message } from "discord.js";

import { getUser, setUser, createUser, getUserInventory } from "../api";
import { variables } from "../env";

import { attack } from "../systems/combat";
import { sendMessage } from "../helpers/message";

export async function attackCommand(message: Message) {
  let attacker = await getUser(message.author.id);
  let attackerInventory = await getUserInventory(attacker);

  const attackerState = 

  if (!attacker) {
    attacker = await createUser({ discordId: message.author.id });
  }

  let attackee = await getUser(variables.enemyId);

  const { newAttackerState, newAttackeeState } = attack(attacker, attackee);

  setUser(newAttackerState);
  setUser(newAttackeeState);

  sendMessage(message, "ouch", true);
}
