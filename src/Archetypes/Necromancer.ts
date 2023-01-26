import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _createdArchetypesInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor() {
    super('Necromancer');
    Necromancer._createdArchetypesInstances += 1;
  }

  public static createdArchetypesInstances(): number {
    return Necromancer._createdArchetypesInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
