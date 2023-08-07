"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor() {
        this.level = 1;
        this.life = 1000;
        this.status = true;
    }
    toAttack(characterWhoAttack, attackValue, character) {
        if (characterWhoAttack === character) {
            console.log("You cannot attack yourself! ");
        }
        else {
            if ((characterWhoAttack.level + 5) <= character.level) {
                console.log("here");
                let totalAttack = (attackValue * 0.50);
                console.log("total attack " + totalAttack);
                character.life -= totalAttack;
                console.log("This life is " + character.life);
            }
            else {
                console.log("not here");
                let totalAttack = (attackValue * 0.50) + attackValue;
                console.log("total attack is: " + totalAttack);
                character.life -= totalAttack;
                console.log(character.life);
            }
            if (character.life <= 0) {
                console.log("You died!");
                character.life = 0;
                character.status = false;
            }
        }
    }
    toCure(cureValue) {
        if (this.status === false) {
            console.log("You cannot cure this character! He is dead!");
        }
        else if (cureValue > 1000) {
            console.log("Invalid value of cure! The maximum limit allowed is 1000!");
        }
        else if ((this.life + cureValue) > 1000) {
            this.life = 1000;
        }
        else {
            this.life += cureValue;
        }
        console.log(this.life);
    }
    getLife() {
        return this.life;
    }
    getStatus() {
        return this.status;
    }
    getLevel() {
        return this.level;
    }
    changeLevel(newLevel) {
        this.level = newLevel;
    }
    setLife(life) {
        this.life = life;
    }
}
exports.Character = Character;
