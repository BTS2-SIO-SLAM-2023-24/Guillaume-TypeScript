import { Animal } from "./Animal";

export class Chien extends Animal {

    interagir(): void {
        const actions = ["remue la queue avec enthousiasme.", "fait le beau en sautant joyeusement."];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        console.log(`${this.nom} ${randomAction}`);
    }

    faireDuBruit(): void {
        console.log(`${this.nom} aboie.`);
    }

    annoncerBruit(): void {
        this.faireDuBruit();
    }
}
