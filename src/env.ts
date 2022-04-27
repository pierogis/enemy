import "dotenv/config";

const enemyId = process.env.ENEMY_ID;
if (!enemyId) {
  throw "provide ENEMY_ID in .env";
}

const discordToken = process.env.DISCORD_TOKEN;
if (!discordToken) {
  throw "provide DISCORD_TOKEN in .env";
}

export const variables: {
  enemyId: string;
  discordToken: string;
} = {
  enemyId,
  discordToken,
};
