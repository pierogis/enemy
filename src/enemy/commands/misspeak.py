from .command import Command
import discord


class Misspeak(Command):
    def process(message: discord.Message):
        print("are you talking to me")
