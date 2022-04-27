import { Client, Intents } from "discord.js";

import ready from "./listeners/ready";
import messageCreate from "./listeners/messageCreate";
import interactionCreate from "./listeners/interactionCreate";

import { variables } from "./env";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

ready(client);
messageCreate(client);
interactionCreate(client);

client.login(variables.discordToken);
