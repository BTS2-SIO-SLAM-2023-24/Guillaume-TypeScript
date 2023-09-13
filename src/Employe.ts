import { Animal } from "./Animal";
import {Chat} from "./Chat";

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
        if (nouvelAnimal) {
            console.log(`${this.nom} a reçu un nouvel animal : ${nouvelAnimal.nom}.`);
        } else {
            console.log(`${this.nom} n'a plus d'animal.`);
        }
    }

    retirerAnimal(): void {
        if (this.animal) {
            console.log(`${this.nom} a retiré l'animal ${this.animal.nom}.`);
            this.animal = null;
        } else {
            console.log(`${this.nom} n'a pas d'animal à retirer.`);
        }
    }



}