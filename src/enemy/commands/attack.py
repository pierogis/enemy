import discord

from .command import Command
from enemy import db

from enemy.systems import combat
from enemy.env import config


class Attack(Command):
    def process(message: discord.Message):
        attacker = db.get_user(message.author.id)
        attackee = db.get_user(config.enemy_id)

        attacker, attackee = combat.attack(attacker, attackee)

        db.set_user(attacker)
        db.set_user(attackee)
