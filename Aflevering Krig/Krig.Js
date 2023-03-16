class Cards {
   constructor(value, name,back){
    this.value = value;
    this.name = name;
    this.back = back
    
   }
}
let cardStack = [];
let back = src ="C:\Users\soere\Desktop\Skole Søren\KrigspilGit\oop1-projekt-uge-11-gruppe-5-1\Aflevering Krig.png"


for (let index = 1; index < 14; index++) {
    cardStack.push(new Cards (index,"Hearts",back))
    cardStack.push(new Cards (index,"Clubs",back))
    cardStack.push(new Cards (index,"Diamonds",back))
    cardStack.push(new Cards (index,"Clovers",back))
}
// Math.random() giver et tal mellem 0 og 1 - hvis vi trækker det fra 0.5 giver det et tal mellem -0.5 og 0.5.
cardStack = cardStack.sort(() => 0.5 - Math.random()); 

// Arrayet der splitter de 2 dæk kort ud på de to spillere
function splitArr1(arr, len) {
    var result = [];
    for (var i = 0; i < arr.length; i += 26) {
      result.push(arr.slice(i, i + len));
    }
  return result;
}

let Player1 = splitArr1(cardStack, 26)[0];

let Player2 = splitArr1(cardStack, 26)[1];

console.log(Player1)

console.log(Player2)

// Den der er div for showCard, addEventListener er tilføjet for at omgå at den er nul samtidig med defer i HTML
const player1Cards = document.getElementById("player1-cards");
if (player1Cards){
  player1Cards.addEventListener('', () => {
    alert('');
  });
}

function showCard(){
  const card1 = document.createElement("div");
  card1.classList.add("card");
  card1.textContent = `${Player1[i].value} of ${Player1[i].name}`;
  player1Cards.appendChild(card1);
}

const player2Cards = document.getElementById("player2-cards");
if (player2Cards){
  player2Cards.addEventListener('', () => {
    alert('');
  });
}

function showCard2(){
  const card2 = document.createElement("div");
  card2.classList.add("card");
  card2.textContent = `${Player2[i].value} of ${Player2[i].name}`;
  player2Cards.appendChild(card2);
}

let i = 0
function hvemVinder(){

  if (Player1[i].value < Player2[i].value|| Player2[i].value == 1){
    console.log("2 vinder" )
    Player2.push(Player1[i])
    Player2.push(Player2[i])
    Player1.splice(i, 1);
    Player2.splice(i, 1);

   // her skal vinderen have de 2 indexer på sig 
  }

else if (Player1[i].value > Player2[i].value || Player1[i].value == 1){
  console.log("1 vinder" )
  Player1.push(Player1[i])
  Player1.push(Player2[i])
  Player1.splice(i, 1)
  Player2.splice(i, 1)
}
else {
  console.log("DER SKU KRIG")
  krig()
}
console.log(Player1)
console.log(Player2)

}
function krig(){ console.log("Den er connected")
 
 }
