import { State } from "../models/state";

export function attack(attackerState: State, attackeeState: State) {
  attackeeState.hp = attackeeState.hp - attackerState.dmg;

  return { attackerState, attackeeState };
}
