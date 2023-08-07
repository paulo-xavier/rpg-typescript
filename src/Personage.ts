

export class Character {

    protected level: number = 1;
    protected life: number = 1000;
    protected status: boolean = true;
    
    constructor() {}

    toAttack(characterWhoAttack:Character, attackValue:number, character: Character) {

        if (characterWhoAttack === character){
            console.log("You cannot attack yourself! ")
        
        } else {
        
        if ((characterWhoAttack.level + 5) <= character.level){
            
            console.log("here")
            let totalAttack = (attackValue * 0.50); 

            console.log("total attack " + totalAttack); // working 
            
            character.life -= totalAttack; 
            // this.life = totalAttack; 
            console.log("This life is "+ character.life); 

        } else {

            console.log("not here")

            let totalAttack = (attackValue * 0.50) + attackValue; 
            console.log("total attack is: " + totalAttack); 
            
            character.life -= totalAttack
            console.log(character.life); 
        }
        

        if (character.life <= 0) {
            console.log("You died!")
            character.life = 0;
            character.status = false;
        }  

        }
    
    }

    toCure(cureValue: number) {
        
        if (this.status === false) {
            console.log("You cannot cure this character! He is dead!");
        } else if (cureValue > 1000) {
            console.log("Invalid value of cure! The maximum limit allowed is 1000!");
        } else if ((this.life + cureValue) > 1000) {
            this.life = 1000;
        } else {
            this.life += cureValue;
        }
    
        
        console.log(this.life);
    }


    getLife():number{
        return this.life; 
    }

    getStatus (): boolean {
        return this.status;
    }

    getLevel(){
        return this.level; 
    }
    

    changeLevel(newLevel: number){
        this.level = newLevel; 
    }

    setLife(life:number) {
        this.life = life; 
    }


}

