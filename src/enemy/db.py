from typing import Dict
from enemy.models.user import User
from enemy.models.item import Item

# temporary
users: Dict[int, User] = {}
items: Dict[int, Item] = {}


def get_user(id: int) -> User:
    return users.get(id)


def set_user(user: User):
    users[user.id] = user


def get_item(id: int) -> Item:
    return items.get(id)
