import { User, Item } from "@pierogis/enemy-core";
import { variables } from "./env";

// const users: { [userId: string]: User } = {
//   0: { id: "0", state: { hp: 1000, dmg: 10 }, inventory: [] },
// };
const items: { [itemId: number]: Item } = {};

export async function getUser(discordId: string): Promise<User> {
  const response = await fetch(
    `${variables.apiBase}/users?discordId=${discordId}`
  );

  const user = response.json();
  return user;
}

export async function setUser(user: User): Promise<User> {
  const data = {};
  const response = await fetch(`${variables.apiBase}/users/${user.id}`, {
    method: "put",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });

  return await response.json();
}

export async function createUser(partial: Omit<User, "id">): Promise<User> {
  const response = await fetch(`${variables.apiBase}/users`, {
    method: "post",
    body: JSON.stringify(partial),
    headers: { "content-type": "application/json" },
  });

  const user = await response.json();
  return user;
}

export function getItem(id: number): Item {
  return items[id];
}

export async function getUserInventory(user: User): Promise<Item[]> {
  const response = await fetch(
    `${variables.apiBase}/inventories?userId=${user.id}`
  );

  const inventory = response.json();
  return inventory;
}

export async function setUserInventory(
  user: User,
  inventory: Item[]
): Promise<Item[]> {
  const data = { items: inventory };

  const response = await fetch(
    `${variables.apiBase}/inventories?userId=${user.id}`,
    {
      method: "put",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    }
  );

  const json = await response.json();

  return json;
}
