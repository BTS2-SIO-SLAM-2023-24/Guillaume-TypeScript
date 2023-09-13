export class Animal {
    private animalHeureux: boolean;
    constructor(
        public id: number,
        public nom: string,
        public age: number,
        public debutPret: Date,
        public finPret: Date
    ) {
        this.animalHeureux = false;
    }

    getId(): number {
        return this.id;
    }

    getNom(): string {
        return this.nom;
    }

    getAge(): number {
        return this.age;
    }

    setAnimalHeureux(heureux: boolean): void {
        this.animalHeureux = heureux;
    }

    estAnimalHeureux(): boolean {
        return this.animalHeureux;
    }
}
