import { Character } from "./Personage";


export class KindWarrior extends Character {


    constructor(

        protected closeCombatWarrior: boolean,
        protected longRangeWarrior: boolean

    ) {
        super();
    }

    verifyCloseCombatWarrior(): boolean {
        return this.closeCombatWarrior;
    }

    verifyLongRangeWarrior(): boolean {
        return this.longRangeWarrior;
    }
    toAttackOpponent(characterWhoAttack: KindWarrior, attackValue: number, character: KindWarrior, distance: number) {

        if (this.closeCombatWarrior === this.longRangeWarrior || character === characterWhoAttack || character.closeCombatWarrior === character.longRangeWarrior) {
            console.log('\x1b[31m', "Invalid! Character of same range or equal");

        } else {
            if (this.closeCombatWarrior && distance <= 2) {
                // console.log('\x1b[32m', "You can attack ");

                if ((characterWhoAttack.getLevel() + 5) <= character.getLevel()) {

                    console.log("here")
                    let totalAttack = (attackValue * 0.50);

                    console.log("total attack " + totalAttack); // working 

                    character.setLife(character.getLife() - totalAttack);

                    // this.life = totalAttack; 
                    console.log("This life is " + character.getLife());


                } else {
                    let totalAttack = (attackValue * 0.50) + attackValue;
                    console.log("total attack is: " + totalAttack);

                    character.setLife(character.getLife() - totalAttack)

                    console.log(character.getLife());

                }

            } else if (this.longRangeWarrior && distance <= 20) {


                if ((characterWhoAttack.getLevel() + 5) <= character.getLevel()) {

                    console.log("here")
                    let totalAttack = (attackValue * 0.50);

                    console.log("total attack " + totalAttack); // working 

                    character.setLife(character.getLife() - totalAttack);

                    // this.life = totalAttack; 
                    console.log("This life is " + character.getLife());



                } else {
                    let totalAttack = (attackValue * 0.50) + attackValue;
                    console.log("total attack is: " + totalAttack);

                    character.setLife(character.getLife() - totalAttack)

                    console.log(character.getLife());

                }


            } else {
                console.log("Too further from opponent!"); 
            }


            if (character.life <= 0) {
                console.log("You died!")
                character.life = 0;
                character.status = false;
            } 

        }

    }

} 