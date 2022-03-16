from .user import User


class Item:
    dmg: int

    def equip(self, equiper: User) -> User:
        equiper.inventory.append(self)

        return equiper
