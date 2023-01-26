import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints: number;

  constructor(name = 'Dwarf', dexterity = 10) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}