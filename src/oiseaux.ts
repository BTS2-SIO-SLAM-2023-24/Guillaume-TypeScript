import {Animal} from "./Animal";

export class Oiseau extends Animal {
    couleurPlumes: string;

    constructor(id: number,
                nom: string,
                age: number,
                debutPret: Date,
                finPret: Date,
                couleurPlumes: string) {

        super(id, nom, age, debutPret, finPret);
        this.couleurPlumes = couleurPlumes;
    }

    chanter() {
        console.log(`${this.nom} chante.`);    }
}
const oiseau1 = new Oiseau(3, "Tweety", 1, new Date("2023-08-25"), new
Date("2023-09-10"), "jaune");
oiseau1.chanter(); // Affiche : Tweety chante.
