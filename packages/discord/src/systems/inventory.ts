import type { Inventory, Item } from "../models/item";

export function equip(inventory: Inventory, item: Item) {
  // bad things could happen in here
  inventory.items.push(item);

  return { inventory };
}

export function unequip(inventory: Inventory, item: Item) {
  // bad things could happen in here
  const index = inventory.items.findIndex(
    (equippedItem) => equippedItem.id == item.id
  );
  inventory.items.splice(index);

  return { inventory };
}
