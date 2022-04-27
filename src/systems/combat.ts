import type { User } from "../models/user";

export function attack(attacker: User, attackee: User) {
  attackee.state.hp = attackee.state.hp - attacker.state.dmg;

  return { attacker, attackee };
}
