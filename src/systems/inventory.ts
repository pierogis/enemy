import type { Item } from "../models/item";
import type { User } from "../models/user";

export function equip(equiper: User, item: Item) {
  // bad things could happen in here
  equiper.inventory.push(item);

  return { equiper };
}

export function unequip(equiper: User, item: Item) {
  // bad things could happen in here
  const index = equiper.inventory.findIndex(
    (equippedItem) => equippedItem.id == item.id
  );
  equiper.inventory.splice(index);

  return { equiper };
}
