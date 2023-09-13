import { Chien } from "./Chien";
import { Chat } from "./Chat";
import { Employe } from "./Employe";

const chien1 = new Chien(1, "Buddy", 5, new Date("2023-01-01"), new Date("2023-01-03"));
const chat1 = new Chat(2, "Whiskers", 3, new Date("2023-01-01"), new Date("2023-01-03"));
const employe1 = new Employe(1, "John", chien1);
const employe2 = new Employe(2, "Alice", chien1);
const employe3 = new Employe(3, "Bob", null);

chien1.faireDuBruit();
chien1.annoncerBruit();
employe1.assignerAnimal(chien1);
employe2.travaillerAvec(chat1);
employe3.setAnimal(chat1);
