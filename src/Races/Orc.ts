import Race from './Race';

export default class Orc extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
    this._maxLifePoints = 74;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}
