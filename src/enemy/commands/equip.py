from .command import Command
import discord
from enemy import db

from enemy.systems import inventory


class Equip(Command):
    def process(message: discord.Message):
        equiper = db.get_user(message.author.id)
        item = db.get_item(message.author.id)

        equiper = inventory.equip(equiper, item)

        db.set_user(equiper)
