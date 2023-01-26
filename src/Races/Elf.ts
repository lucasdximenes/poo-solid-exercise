import Race from "./Race";

export default class Elf extends Race {
    private static _createdRacesInstances: number = 0;
    private _maxLifePoints: number;

    constructor(name: string = 'Elf', dexterity: number = 10) {
        super(name, dexterity);
        Elf._createdRacesInstances++;
        this._maxLifePoints = 99
    }

    public get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    public static createdRacesInstances(): number {
        return this._createdRacesInstances;
    }
}