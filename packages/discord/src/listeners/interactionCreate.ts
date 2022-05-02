import type { Client, Interaction } from "discord.js";

export default (client: Client): void => {
  client.once("interactionCreate", (interaction: Interaction) => {
    interaction.user.send("logeed in");
  });
};
