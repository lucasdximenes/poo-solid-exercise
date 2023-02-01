import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player: Fighter;
  private _enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._player = player;
    this._enemy = enemy;
  }

  public fight(): number {
    while (this._player.lifePoints > 0 && this._enemy.lifePoints > 0) {
      this._player.attack(this._enemy);
      this._enemy.attack(this._player);
    }

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}
