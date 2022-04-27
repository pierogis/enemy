import { User } from "./models/user";
import { Item } from "./models/item";

const users: { [userId: string]: User } = {
  0: { id: "0", state: { hp: 1000, dmg: 10 }, inventory: [] },
};
const items: { [itemId: number]: Item } = {};

export function getUser(id: string): User {
  return users[id];
}

export function setUser(user: User): void {
  users[user.id] = user;
}

export function createUser(partial: Pick<User, "id"> & Partial<User>): User {
  users[partial.id] = { state: { hp: 100, dmg: 1 }, inventory: [], ...partial };

  return users[partial.id];
}

export function getItem(id: number): Item {
  return items[id];
}
