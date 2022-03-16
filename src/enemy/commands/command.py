from abc import ABC, abstractmethod

import discord


class Command(ABC):
    @abstractmethod
    def process(message: discord.Message):
        pass
