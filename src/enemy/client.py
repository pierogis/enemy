import discord

from enemy.commands import dispatch
from enemy.env import config


class Client(discord.Client):
    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))

    async def on_message(self, message: discord.Message):
        if message.content.startsWith('$'):
            dispatch(message)


if __name__ == '__main__':
    client = Client()
    client.run(config.discord_token)
