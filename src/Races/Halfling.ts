import Race from './Race';

export default class Halfling extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints: number;

  constructor(name = 'Halfling', dexterity = 10) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}