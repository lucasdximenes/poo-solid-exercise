import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdArchetypesInstances = 0;
  private _energyType: EnergyType;

  constructor(name = 'Ranger') {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypesInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._createdArchetypesInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
