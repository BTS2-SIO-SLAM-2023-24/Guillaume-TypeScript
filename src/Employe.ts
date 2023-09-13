import { Animal } from "./Animal";

export class Employe {
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

    setAnimal(nouvelAnimal: Animal | null): void {
        this.animal = nouvelAnimal;
        if (nouvelAnimal){
            console.log(`${this.nom} a reçu un nouvel animal : ${nouvelAnimal.nom}.`)
            this.animal = null;
        }else {
            console.log(`${this.nom} n'a pas d'animal à retirer.`);
        }
    }
}
