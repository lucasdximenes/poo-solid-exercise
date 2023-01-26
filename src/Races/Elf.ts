import Race from './Race';

export default class Elf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints: number;

  constructor(name = 'Elf', dexterity = 10) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}