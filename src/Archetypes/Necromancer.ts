import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _createdArchetypesInstances = 0;
  private _energyType: EnergyType;

  constructor(name = 'Necromancer') {
    super(name);
    this._energyType = 'mana';
    Necromancer._createdArchetypesInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypesInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
