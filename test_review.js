/* kyle lingat, 11 23, javascript test review */

var knight = "arthur";
var maiden = "jane";
var monster = "dragon";

var WeaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];


var hero = [
 wizard = "Merlin",
 weapon = "Mace",
 power = "20"
];


function swordInTheStone(worthy) {
  if (worthy == "arthur") {
  console.log("We have found our king " + worthy);
}
  else {
    console.log("We must keep searching for, " + worthy + " is unworthy")
  }
}


swordInTheStone(knight)


function trueLove(king,queen) {
  if (queen == "Guinevere" && king == "arthur") {
  console.log("On this day, our " + king + " and " + queen + " Shall rule happily ever after.");
}
  else {
    console.log("We must keep searching, for true love must reign over Camelot");
  }
}


trueLove(knight, maiden)


function epicBattle(wizard,enemy,power){
  if (power < 15) {
  console.log('Our ' + wizard + " has fallen!"); 
}
  else if (power >= 16 && power <= 40 ) {
    console.log(wizard + " has almost slain the " + enemy + "." );
  }
  else {
    console.log("Our " + wizard + " has slain the " + enemy + "!" );
  }
}


epicBattle(hero[0],monster,hero[2])








