import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdArchetypesInstances = 0;
  private _energyType: EnergyType;

  constructor(name = 'Mage') {
    super(name);
    this._energyType = 'mana';
    Mage._createdArchetypesInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._createdArchetypesInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
