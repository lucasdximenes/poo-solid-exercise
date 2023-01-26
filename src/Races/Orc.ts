import Race from "./Race";

export default class Orc extends Race {
    private static _createdRacesInstances: number = 0;
    private _maxLifePoints: number;

    constructor(name: string = 'Orc', dexterity: number = 10) {
        super(name, dexterity);
        Orc._createdRacesInstances++;
        this._maxLifePoints = 74
    }

    public get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    public static createdRacesInstances(): number {
        return this._createdRacesInstances;
    }
}