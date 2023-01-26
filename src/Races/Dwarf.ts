import Race from "./Race";

export default class Dwarf extends Race {
    private static _createdRacesInstances: number = 0;
    private _maxLifePoints: number;

    constructor(name: string = 'Dwarf', dexterity: number = 10) {
        super(name, dexterity);
        Dwarf._createdRacesInstances++;
        this._maxLifePoints = 80
    }

    public get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    public static createdRacesInstances(): number {
        return this._createdRacesInstances;
    }
}