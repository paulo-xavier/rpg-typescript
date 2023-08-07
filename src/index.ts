import { Guild } from "./Guilds";
import { KindWarrior } from "./KindWarrior";
import { Character } from "./Personage";
import { Objects } from "./Objects";


// Iteration 1 

//Creating the characters 

const superman = new Character(); 
const joker  = new Character();


//Testing attack 
superman.toAttack(superman,1000, joker); 
console.log(joker.getLife());
console.log(joker.getStatus());  
// superman.toAttack(400, joker)


//Testing cure 
superman.toCure(200);
console.log(joker.getLife());


console.log("...............................................") 


// Iteration 2


// Blocking a character to attack himself 
superman.toAttack(superman, 200, superman);
console.log(superman.getLife());

// it's not possible to attack itself;

//Testing if is possible to cure himself 
joker.toAttack(joker, 200, superman)
console.log(superman.getLife()); 

superman.toCure(300); 
console.log(superman.getLife()); 


console.log("---d----------d-d-d-d-d")


//Testing the increasing of attack by level; 

let xavier = new Character();
// console.log(xavier.getLife());
// console.log(xavier.getLevel());
// console.log(xavier.getStatus());

let magneto = new Character(); 

magneto.changeLevel(10);
xavier.changeLevel(5); 

//First situation: magneto is 5 levels up to Xavier;
xavier.toAttack(xavier, 100, magneto);

console.log(magneto.getLife()); 

console.log(magneto.getLife());

console.log("...... "); 

//Next situation, Xavier is 5 levels up to magneto;

xavier.changeLevel(10); 
magneto.changeLevel (5); 

xavier.toAttack(xavier, 100, magneto);

console.log(magneto.getLife()); 

console.log("...")


// Testing others 

const cyclops = new Character()
cyclops.changeLevel(5); 

const mastermind = new Character()
mastermind.changeLevel(5); 

cyclops.toAttack(cyclops, 100, mastermind) 

mastermind.getLife();


console.log("... .... ... . ----. .  . ."); 




// Creating class of Kind Warrior

//First case, testing the close combat warrior;

const flash = new KindWarrior(true, false);
console.log(flash.getLevel()); 
flash.changeLevel(10)


const grood = new KindWarrior(false, true); 
grood.changeLevel(5);
console.log(grood.getLevel());
 

flash.toAttackOpponent(flash, 100, grood, 1); //Testing attack; 

console.log("-- ---- ------ ----- ---- ---");


//Testing the long range warrior

const wolverine = new KindWarrior(false, true)

wolverine.changeLevel(5); //putting levels ( if the opponent has 5 levels or more up to the character  the attack decrease  50% )
console.log(wolverine.getLevel());


const sabretooh = new KindWarrior(false, true); 

sabretooh.changeLevel(10); // (if opponent has less than 5 levels up to the character, the attack increase 50% )

console.log(sabretooh.getLevel());

wolverine.toAttackOpponent(wolverine, 100, sabretooh, 20);

console.log("-------");


//Testing if the closeCombatWarrior has distance > 2

const naruto = new KindWarrior(true, false); 

// naruto.toAttackOpponent(naruto, 100, magneto, 4 );


console.log(" ------------------------------------ - - -");


// Iteration 4 


// Trying to add an character to a guild and remove the guild
const batman = new Guild(true, false); 
const robbin = new Guild (true, false )

batman.addUserGuild(["Avengers", "Justice league"])

console.log(batman)

batman.removeUserGuild("Avengers"); //worked ;

console.log(batman.getUserGuilds());  //worked; 


// Testing if both characters are from same guild 

batman.addUserGuild(["justice league", "avengers"]); 
robbin.addUserGuild(["justice league"]); 

batman.toAttackOpponent(batman, 100, robbin, 1); // worked

console.log("------===--=--==-")

//Testing different guilds

batman.addUserGuild(["Justice league"]); 
robbin.addUserGuild(["Tony Stark Team"]); 

robbin.toAttackOpponent(robbin, 100, batman, 100); // worked


console.log("=====================")

//Testing if they are from different guilds 

const bruce = new Guild(false, true)
const michael = new Guild(true, false)



bruce.changeLevel(10); 
michael.changeLevel(5); 

console.log(bruce.getLevel()); 
console.log(michael.getLevel());


bruce.toAttackOpponent(bruce, 100, michael, 19); 

console.log(michael.getLife());
console.log(michael.getStatus());

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-"); 

//Testing if the cure method 

const thor = new Guild(true, false); 
const loki = new Guild(false, true); 
const spiderMan = new Guild(true, false)

thor.addUserGuild(["Avengers"]);
spiderMan.addUserGuild(["Avengers"]); 
loki.addUserGuild(["Thanos"]); 

thor.changeLevel(10); 
loki.changeLevel(10);
spiderMan.changeLevel(5); 


loki.toAttackOpponent(loki, 900, spiderMan, 2)
console.log(spiderMan.getLife()); 


thor.toCureGuild(200, spiderMan); 
console.log(spiderMan.getLife()); 
console.log(spiderMan.getStatus());


//Other tests

console.log(".-.-.-.-.-.-..-.-.-.-.-.-.-")


// Iteration 5 - Adding things to attack 

const wraith = new Objects(true, false); 

console.log("Wraith's level before attack dragon: " + wraith.getLevel());
wraith.attackDragon(2000); 
console.log("Wraith's life after attack dragon: " + wraith.getLevel()); 

console.log("Tree level after attack: " + wraith.getDragonLife());

// Normal attack 

console.log(".....................")

const ben = new Objects(true, false); 

console.log("Ben's level before attack dragon: " + ben.getLevel());
ben.attackDragon(100); 
ben.attackDragon(100); 
console.log("Ben's life after attack dragon: " + ben.getLevel()); 
ben.attackDragon(1800); 
ben.attackDragon(100); 
console.log("Ben's level after attack dragon: " + ben.getLevel());



// Final Test

console.log("-=-=-=-=-=-==-=-=-==")

const ironMan = new Guild(true, false); 
const raven = new Guild (false ,true); 

ironMan.addUserGuild(["Iron man guild"]); 
raven.addUserGuild(["Raven guild"]); 

ironMan.changeLevel(10); 
raven.changeLevel(5); 

ironMan.toAttackOpponent(ironMan, 100, raven, 2);

console.log("Raven's life after attack: " + raven.getLife())


// Remove guilds 

ironMan.removeUserGuild("Iron man guild"); 
console.log("Iron man guilds after remove: " + ironMan.getUserGuilds());

// Character from same guild, curing iron man; 

const titan = new Guild(true, false); 
ironMan.addUserGuild(["Iron man guild"]);
titan.addUserGuild(["Raven guild"]); 

titan.toCureGuild(100, raven); 

console.log("Raven's life after cure: " + raven.getLife()); 




console.log("------------------------")
const nightblaster =  new Objects(false ,true)

// Nightblaster  attacking a dragon to increase level; 

console.log("Nightblaster level before attack dragon: " + nightblaster.getLevel());

nightblaster.attackDragon(2000); 

console.log("Nightblaster level after attack dragon: " + nightblaster.getLevel())


console.log("------------------------------------------");

const goldfish = new Guild(true, false);
const jamesBond = new Guild (false, true);

//close combat warrior attack (either having leve 1 )

goldfish.toAttackOpponent(goldfish, 100, jamesBond, 2); 

console.log("James Bond's life after attack" + jamesBond.getLife()); 

// James Bond attacking goldfish having +5 levels up

console.log("*********************************")

jamesBond.changeLevel(10); 

jamesBond.toAttackOpponent(jamesBond, 100, goldfish, 15);

console.log("Goldfish's life after attack: " + goldfish.getLife()); 


                            

                            ////////// EVERYTHING WORKING //////////

