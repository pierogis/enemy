import type { Client } from "discord.js";

export default (client: Client): void => {
  client.once("ready", () => {
    console.log("Ready!");
  });
};
