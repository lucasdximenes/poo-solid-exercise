import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
import Monster from '../Monster';

type MonsterArray = Array<Monster | Fighter | SimpleFighter>;

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemies: MonsterArray;

  constructor(player: Fighter, enemies: MonsterArray) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  public fight(): number {
    let monsterIndex = 0; // index of the current monster in the array
    while (this._player.lifePoints > 0 && monsterIndex < this._enemies.length) {
      this._player.attack(this._enemies[monsterIndex]);
      this._enemies[monsterIndex].attack(this._player);
      if (this._enemies[monsterIndex].lifePoints === -1) {
        // if the monster is dead, we move to the next one
        monsterIndex += 1;
      }
    }

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}
