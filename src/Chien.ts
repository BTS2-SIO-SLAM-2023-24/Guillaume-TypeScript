import { Animal } from "./Animal";

export class Chien extends Animal {
    faireDuBruit(): void {
        console.log(`${this.nom} aboie.`);
    }

    annoncerBruit(): void {
        this.faireDuBruit();
    }
}
