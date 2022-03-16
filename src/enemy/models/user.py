from typing import List
from .state import State
from .item import Item


class User:
    state: State
    inventory: List[Item]

    def equip(self, item: Item):
        self.inventory.append(item)
