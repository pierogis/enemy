import "dotenv/config";

const enemyId = process.env.ENEMY_ID;
if (!enemyId) {
  throw "provide ENEMY_ID in .env";
}

const discordToken = process.env.DISCORD_TOKEN;
if (!discordToken) {
  throw "provide DISCORD_TOKEN in .env";
}

const apiBase = process.env.API_BASE;
if (!apiBase) {
  throw "provide API_BASE in .env";
}

export const variables: {
  enemyId: string;
  discordToken: string;
  apiBase: string;
} = {
  enemyId,
  discordToken,
  apiBase,
};
