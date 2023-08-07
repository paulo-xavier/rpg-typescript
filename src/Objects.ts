import { Guild } from "./Guilds";

export class Objects extends Guild {

    protected  dragon: number = 2000; 

        attackDragon (attackNumber : number) {

        if (this.dragon <= 0) {
            console.log("The dragon is already dead! "); 
        
        } else {

            this.dragon -= attackNumber; 
            
            if (this.dragon <= 0) {
                console.log("YOU DEFEATED THE DRAGON! YOU'VE EARNED +5 LEVELS "); 
                 this.changeLevel(this.getLevel() + 5);      
                 console.log("Dragon's life: " + this.dragon);               
            } else {
                console.log("You attacked the furious Dragon! Nice");
                console.log("Dragon's life: " + this.dragon); 
                
            }

        }

      
    }

    getDragonLife() {
        console.log(this.dragon)  
    }

}