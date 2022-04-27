import { Item } from "./item";
import { State } from "./state";

export interface User {
  id: string;
  state: State;
  inventory: Item[];
}
