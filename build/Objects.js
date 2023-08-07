"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objects = void 0;
const Guilds_1 = require("./Guilds");
class Objects extends Guilds_1.Guild {
    constructor() {
        super(...arguments);
        this.dragon = 2000;
    }
    attackDragon(attackNumber) {
        if (this.dragon <= 0) {
            console.log("The dragon is already dead! ");
        }
        else {
            this.dragon -= attackNumber;
            if (this.dragon <= 0) {
                console.log("YOU DEFEATED THE DRAGON! YOU'VE EARNED +5 LEVELS ");
                this.changeLevel(this.getLevel() + 5);
                console.log("Dragon's life: " + this.dragon);
            }
            else {
                console.log("You attacked the furious Dragon! Nice");
                console.log("Dragon's life: " + this.dragon);
            }
        }
    }
    getDragonLife() {
        console.log(this.dragon);
    }
}
exports.Objects = Objects;
