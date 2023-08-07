import { KindWarrior } from "./KindWarrior";

export class Guild extends KindWarrior {

    private userGuilds: string[] = []

    private griffin: number = 2000;
    private goblins: number = 2000;
    private tree: number = 2000;

    constructor(

        protected closeCombatWarrior: boolean,
        protected longRangeWarrior: boolean,

    ) {
        super(closeCombatWarrior, longRangeWarrior)

    }

    addUserGuild(userGuild: string[]) {
        this.userGuilds = userGuild;

    }

    removeUserGuild(guildToRemove: string) {
        const index = this.userGuilds.indexOf(guildToRemove);

        if (index > -1) {
            this.userGuilds.splice(index, 1);



        } else {
            console.log("Invalid Guild! ");

        }
    }


    toAttackOpponent(characterWhoAttack: Guild, attackValue: number, character: Guild, distance: number) {

        if (characterWhoAttack.getLife() === 0 || character.getLife() === 0) {
            console.log("You cannot do this action! ");
        } else {

            const attackerGuilds = characterWhoAttack.getUserGuilds()

            const defenderGuilds = character.getUserGuilds();

            const commonGuilds = attackerGuilds.filter(guilds => defenderGuilds.includes(guilds))

            if (commonGuilds.length > 0) {
                console.log("You cannot attack this opponent! You are from the same GUILD!")


            } else {

                if (this.closeCombatWarrior === this.longRangeWarrior || character === characterWhoAttack || character.closeCombatWarrior === character.longRangeWarrior) {
                    console.log('\x1b[31m', "Invalid! Character of same range or equal");

                } else {
                    if (this.closeCombatWarrior && distance <= 2) {

                        if ((characterWhoAttack.getLevel() + 5) <= character.getLevel()) {

                            console.log("here");

                            let totalAttack = (attackValue * 0.50);

                            console.log("total attack " + totalAttack); // working 

                            character.setLife(character.getLife() - totalAttack);

                            console.log("This life is: " + character.getLife());

                        } else {

                            let totalAttack = (attackValue * 0.50) + attackValue;

                            console.log("total attack is:  " + totalAttack);

                            character.setLife(character.getLife() - totalAttack);

                            console.log(character.getLife());
                        }


                    } else if (this.longRangeWarrior && distance <= 20) {

                        if ((characterWhoAttack.getLevel() + 5) <= character.getLevel()) {

                            console.log("here")

                            let totalAttack = (attackValue * 0.50);

                            console.log("total attack " + totalAttack) //working 

                            character.setLife(character.getLife() - totalAttack);

                            console.log("This life is" + character.getLife());

                        } else {

                            let totalAttack = (attackValue * 0.50) + attackValue;
                            console.log("Total attack is: " + totalAttack);

                            character.setLife(character.getLife() - totalAttack);

                            console.log(character.getLife());
                        }

                    } else {
                        console.log("Too further from opponent!")
                    }



                }


                if (character.life <= 0) {
                    console.log("You died!")
                    character.life = 0;
                    character.status = false;
                }


            }


        }
    }


    getUserGuilds(): string[] {
        return this.userGuilds;
    }



    toCureGuild(cureValue: number, character: Guild) {

        const characterWhoCure = this.getUserGuilds()

        const curedCharacter = character.getUserGuilds();

        const commonGuilds = characterWhoCure.filter(guilds => curedCharacter.includes(guilds))

        if (commonGuilds.length > 0) {


            if (character.status === false) {
                console.log("You cannot cure this character! He is dead!");
            } else if (cureValue > 1000) {
                console.log("Invalid value of cure! The maximum limit allowed is 1000!");
            } else if ((character.life + cureValue) > 1000) {
                character.life = 1000;
            } else {
                character.life += cureValue;
            }


            console.log(character.life);

        } else {
            console.error("You cannot cure this character, you are not from the same GUILD! ")
        }


    }


}
