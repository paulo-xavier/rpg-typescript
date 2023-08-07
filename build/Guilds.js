"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guild = void 0;
const KindWarrior_1 = require("./KindWarrior");
class Guild extends KindWarrior_1.KindWarrior {
    constructor(closeCombatWarrior, longRangeWarrior) {
        super(closeCombatWarrior, longRangeWarrior);
        this.closeCombatWarrior = closeCombatWarrior;
        this.longRangeWarrior = longRangeWarrior;
        this.userGuilds = [];
        this.griffin = 2000;
        this.goblins = 2000;
        this.tree = 2000;
    }
    addUserGuild(userGuild) {
        this.userGuilds = userGuild;
    }
    removeUserGuild(guildToRemove) {
        const index = this.userGuilds.indexOf(guildToRemove);
        if (index > -1) {
            this.userGuilds.splice(index, 1);
        }
        else {
            console.log("Invalid Guild! ");
        }
    }
    toAttackOpponent(characterWhoAttack, attackValue, character, distance) {
        if (characterWhoAttack.getLife() === 0 || character.getLife() === 0) {
            console.log("You cannot do this action! ");
        }
        else {
            const attackerGuilds = characterWhoAttack.getUserGuilds();
            const defenderGuilds = character.getUserGuilds();
            const commonGuilds = attackerGuilds.filter(guilds => defenderGuilds.includes(guilds));
            if (commonGuilds.length > 0) {
                console.log("You cannot attack this opponent! You are from the same GUILD!");
            }
            else {
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
                            console.log("This life is: " + character.getLife());
                        }
                        else {
                            let totalAttack = (attackValue * 0.50) + attackValue;
                            console.log("total attack is:  " + totalAttack);
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
                            console.log("This life is" + character.getLife());
                        }
                        else {
                            let totalAttack = (attackValue * 0.50) + attackValue;
                            console.log("Total attack is: " + totalAttack);
                            character.setLife(character.getLife() - totalAttack);
                            console.log(character.getLife());
                        }
                    }
                    else {
                        console.log("Too further from opponent!");
                    }
                }
                if (character.life <= 0) {
                    console.log("You died!");
                    character.life = 0;
                    character.status = false;
                }
            }
        }
    }
    getUserGuilds() {
        return this.userGuilds;
    }
    toCureGuild(cureValue, character) {
        const characterWhoCure = this.getUserGuilds();
        const curedCharacter = character.getUserGuilds();
        const commonGuilds = characterWhoCure.filter(guilds => curedCharacter.includes(guilds));
        if (commonGuilds.length > 0) {
            if (character.status === false) {
                console.log("You cannot cure this character! He is dead!");
            }
            else if (cureValue > 1000) {
                console.log("Invalid value of cure! The maximum limit allowed is 1000!");
            }
            else if ((character.life + cureValue) > 1000) {
                character.life = 1000;
            }
            else {
                character.life += cureValue;
            }
            console.log(character.life);
        }
        else {
            console.error("You cannot cure this character, you are not from the same GUILD! ");
        }
    }
}
exports.Guild = Guild;
