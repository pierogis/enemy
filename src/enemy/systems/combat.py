from typing import Tuple
from enemy.models.user import User


def attack(attacker: User, attackee: User) -> Tuple[User, User]:
    attackee.hp = attackee.hp - attacker.dmg

    return attacker, attackee
