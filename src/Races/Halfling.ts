import Race from "./Race";

export default class Halfling extends Race {
    private static _createdRacesInstances: number = 0;
    private _maxLifePoints: number;

    constructor(name: string = 'Halfling', dexterity: number = 10) {
        super(name, dexterity);
        Halfling._createdRacesInstances++;
        this._maxLifePoints = 60
    }

    public get maxLifePoints(): number {
        return this._maxLifePoints;
    }

    public static createdRacesInstances(): number {
        return this._createdRacesInstances;
    }
}