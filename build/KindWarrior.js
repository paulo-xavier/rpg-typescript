"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindWarrior = void 0;
const Personage_1 = require("./Personage");
class KindWarrior extends Personage_1.Character {
    constructor(closeCombatWarrior, longRangeWarrior) {
        super();
        this.closeCombatWarrior = closeCombatWarrior;
        this.longRangeWarrior = longRangeWarrior;
    }
    verifyCloseCombatWarrior() {
        return this.closeCombatWarrior;
    }
    verifyLongRangeWarrior() {
        return this.longRangeWarrior;
    }
    toAttackOpponent(characterWhoAttack, attackValue, character, distance) {
        if (this.closeCombatWarrior === this.longRangeWarrior || character === characterWhoAttack || character.closeCombatWarrior === character.longRangeWarrior) {
            console.log('\x1b[31m', "Invalid! Character of same range or equal");
        }
        else {
            if (this.closeCombatWarrior && distance <= 2) {
                if ((characterWhoAttack.getLevel() + 5) <= character.getLevel()) {
                    console.log("here");
                    let totalAttack = (attackValue * 0.50);
                    console.log("total attack " + totalAttack);
                    character.setLife(character.getLife() - totalAttack);
                    console.log("This life is " + character.getLife());
                }
                else {
                    let totalAttack = (attackValue * 0.50) + attackValue;
                    console.log("total attack is: " + totalAttack);
                    character.setLife(character.getLife() - totalAttack);
                    console.log(character.getLife());
                }
            }
            else if (this.longRangeWarrior && distance <= 20) {
                if ((characterWhoAttack.getLevel() + 5) <= character.getLevel()) {
                    console.log("here");
                    let totalAttack = (attackValue * 0.50);
                    console.log("total attack " + totalAttack);
                    character.setLife(character.getLife() - totalAttack);
                    console.log("This life is " + character.getLife());
                }
                else {
                    let totalAttack = (attackValue * 0.50) + attackValue;
                    console.log("total attack is: " + totalAttack);
                    character.setLife(character.getLife() - totalAttack);
                    console.log(character.getLife());
                }
            }
            else {
                console.log("Too further from opponent!");
            }
            if (character.life <= 0) {
                console.log("You died!");
                character.life = 0;
                character.status = false;
            }
        }
    }
}
exports.KindWarrior = KindWarrior;
