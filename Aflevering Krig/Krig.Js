class Cards {
   constructor(value, name){
    this.value = value;
    this.name = name;
    
   }
}
let cardStack = [];

for (let index = 2; index < 15; index++) {
    cardStack.push(new Cards (index,"Hearts"))
    cardStack.push(new Cards (index,"Clubs"))
    cardStack.push(new Cards (index,"Diamonds"))
    cardStack.push(new Cards (index,"Clovers"))
}
// Math.random() giver et tal mellem 0 og 1 - hvis vi trækker det fra 0.5 giver det et tal mellem -0.5 og 0.5.
cardStack = cardStack.sort(() => 0.5 - Math.random()); 


function splitArr1(arr, len) {
    var result = [];
    for (var i = 0; i < arr.length; i += 26) {
      result.push(arr.slice(i, i + len));
      
    }
    return result;
  }

let Player1 = splitArr1(cardStack, 26)[0];

let Player2 = splitArr1(cardStack, 26)[1];


const player1Cards = document.getElementById("player1-cards");
if (player1Cards){
  player1Cards.addEventListener('', () => {
    alert('');
  });
}
function showCard(){
for (let i = 0; i < Player1.length; i++) {
  const card1 = document.createElement("div");
  card1.classList.add("card");
  card1.textContent = `${Player1[i].value} of ${Player1[i].name}`;
  player1Cards.appendChild(card1);
  

  }
}

const player2Cards = document.getElementById("player2-cards");
if (player2Cards){
  player2Cards.addEventListener('', () => {
    alert('');
  });
}
function showCard2(){
for (let i = 0; i < Player2.length; i++) {
  const card2 = document.createElement("div");
  card2.classList.add("card");
  card2.textContent = `${Player2[i].value} of ${Player2[i].name}`;
  player2Cards.appendChild(card2);
  }
}

let i = 0
function hvemVinder(){

  if (Player1[i].value < Player2[i].value){
    console.log("2 vinder" +Player1[i].value + Player2[i].value)
    Player2.push(Player1[i])
    Player2.push(Player2[i])
    Player1.splice(i, 1);
    Player2.splice(i, 1);

   // her skal vinderen have de 2 indexer på sig 
  }

else if (Player1[i].value > Player2[i].value){
  console.log("1 vinder" +Player1[i].value + Player2[i].value)
  Player1.push(Player1[i])
  Player1.push(Player2[i])
  Player1.splice(i, 1)
  Player2.splice(i, 1)
}
else {
  console.log("DER SKU KRIG")
}
console.log(Player1)
console.log(Player2)

}


