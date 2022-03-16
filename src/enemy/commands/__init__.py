from typing import Dict

import discord

from .command import Command
from .attack import Attack
from .equip import Equip
from .misspeak import Misspeak


commands: Dict[str, Command] = {
    'attack': Attack(),
    'equip': Equip()
}


def dispatch(message: discord.Message):
    command = commands.get(message.content.split(' '))
    if command is None:
        command = Misspeak()
    command.process(message)
