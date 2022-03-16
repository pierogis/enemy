from typing import Tuple
from enemy.models.user import User
from enemy.models.item import Item


def equip(equiper: User, item: Item) -> Tuple[User, User]:
    # bad things could happen in here
    item.equip(equiper)

    return equiper
