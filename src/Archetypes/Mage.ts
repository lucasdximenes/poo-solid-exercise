import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdArchetypesInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name = 'Mage') {
    super(name);
    Mage._createdArchetypesInstances += 1;
  }

  public static createdArchetypesInstances(): number {
    return Mage._createdArchetypesInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
