import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdArchetypesInstances = 0;
  private _energyType: EnergyType;

  constructor(name = 'Warrior') {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdArchetypesInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._createdArchetypesInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
