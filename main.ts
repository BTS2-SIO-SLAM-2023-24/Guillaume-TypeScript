class Animal {

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
    getAge():number {
        return this.age;
    }

    setAnimalHeureux(heureux: boolean): void{
        this.animalHeureux = heureux;
    }

    estAnimalHeureux(): boolean{
        return this.animalHeureux;
    }
}

class Employe {
    constructor(
        public id: number,
        public nom: string,
        public animal: Animal | null
    ) {}

    travaillerAvec(animal: Animal): void {
        console.log(`${this.nom} travaille avec ${animal.nom} le ${animal.constructor.name}.`);
    }

    assignerAnimal(animal: Animal): void {
        console.log(`${this.nom} a reçu l'animal ${animal.nom}.`);
    }


}

class Chien extends Animal {
    faireDuBruit(): void {
        console.log(`${this.nom} aboie.`);
    }

    annoncerBruit(): void {
        this.faireDuBruit();
    }
}

class Chat extends Animal {
    miauler(): void {
        console.log(`${this.nom} miaule.`);
    }
}


const chien1 = new Chien(1, "Buddy", 5, new Date("2023-01-01"), new Date("2023-01-03"));
const chat1 = new Chat(2, "Whiskers", 3, new Date("2023-01-01"), new Date("2023-01-03"));
const employe1 = new Employe(1, "John", chat1);
const employe2 = new Employe(2, "Alice", chien1);
const employe3 = new Employe(3, "Bob", null);

chien1.faireDuBruit();
chien1.annoncerBruit();






