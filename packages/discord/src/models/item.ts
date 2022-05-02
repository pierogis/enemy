export interface Item {
  id: number;
  dmg: number;
}
export interface Inventory {
  userId: number;
  items: Item[];
}
