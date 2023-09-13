import { Animal } from "./Animal";

export class Chat extends Animal {
    miauler(): void {
        console.log(`${this.nom} miaule.`);
    }



}
