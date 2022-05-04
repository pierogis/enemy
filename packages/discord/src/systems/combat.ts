export function attack(attacker: User, attackee: User) {
  attackeeState.hp = attackeeState.hp - attackerState.dmg;

  return { attackerState, attackeeState };
}
