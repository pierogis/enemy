export interface State {
  // """
  // this state class unifies all of the different models

  // ex: User in a Realm wielding Item has dmg based on a sum of
  // User's dmg, Item's dmg, Realm's dmg
  // """

  hp: number;
  dmg: number;
}
