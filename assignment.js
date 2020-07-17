//feetToMile
function feetToMile(feet){
  var mile = feet / 5280;
  return mile;
}
var result = feetToMile(10000);
console.log(result);

//woodCalculator
function woodCalculator(chair, table, khat){
var chairCount = chair * 1;
var tableCount = table * 3;
var khatCount  = khat * 5;
var totalWood = chairCount + tableCount + khatCount;
return totalWood;
}
var WoodResult = woodCalculator (3, 5, 7);
console.log(WoodResult);

//brickCalculator

//tinyFriend
function tinyFriend (name){
var tiny = name[0];
for( var i = 0; i < name.length; i++){
var friendName = name[i];
if (friendName > tiny){
  tiny=friendName;
}
}
return tiny;
}
var tinyFriendName = tinyFriend(["akboriya", "baborMia", "suhag"])
console.log(tinyFriendName);