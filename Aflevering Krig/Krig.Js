class Cards {
   constructor(value, name,back,front){
    this.value = value;
    this.name = name;
    this.back = back
    this.front = front
    
   }
}
let cardStack = [];
 var back = document.createElement("img");
var front = document.createElement("img");
/*
var frontParent = document.getElementById("player1-cards");
 front.id = "frontid";
 front.className = "class";
 front.src = "kort/ace_of_hearts.png"     // front.src = "front URL/PATH"
 frontParent.appendChild(front);*/

 
for (let index = 2; index < 15; index++) {
    cardStack.push(new Cards (index,"Hearts",back,front))
    cardStack.push(new Cards (index,"Clubs",back,front))
    cardStack.push(new Cards (index,"Diamonds",back,front))
    cardStack.push(new Cards (index,"Clovers",back,front))
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
const player2Cards = document.getElementById("player2-cards");


let card1 = null;

function showCard(){
  if (card1 !== null) {
    card1.remove();
  }
  card1 = document.createElement("div")
  card1.classList.add("card");
  card1.textContent = `${Player1[i].value} of ${Player1[i].name}`;
  card1.addEventListener("click", function() {
    card1.remove();
    card1 = null;
  });  
  
  
  player1Cards.appendChild(card1);
}
 /*var backParent = document.getElementById("player1-cards");
 back.id = "backid";
 back.className = "class";
 back.src = "kort/back_of_cards.png"     // back.src = "back URL/PATH"
 backParent.appendChild(back);*/

let card2 = null;

function showCard2(){
  if (card2 !== null) {
    card2.remove();
  }
  card2 = document.createElement("div");
  card2.classList.add("card");
  card2.textContent = `${Player2[i].value} of ${Player2[i].name}`;
  card2.addEventListener("click", function() {
    card2.remove();
    card2 = null;
  }); 

  player2Cards.appendChild(card2);
}
  /*var back = document.createElement("img");
  var backParent = document.getElementById("player2-cards");
  back.id = "backid";
  back.className = "class";
  back.src = "kort/back_of_cards.png"     //back.src = "back URL/PATH"
  backParent.appendChild(back);*/



let i = 0
function hvemVinder(){

  if (Player1[i].value < Player2[i].value){
    console.log("2 Vinder")
    Player2.push(Player1[i])
    Player2.push(Player2[i])
    Player1.splice(i, 1);
    Player2.splice(i, 1);
    
   // her skal vinderen have de mk2 indexer på sig 
  }

else if (Player1[i].value > Player2[i].value ){
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
 

function krig()
    { 

      let btn = document.createElement("button");
      btn.innerHTML = "Krig";
      document.body.appendChild(btn);
      btn.addEventListener("click", hvemVinder)


      const card1 = document.createElement("div");
      const card2 = document.createElement("div");
      btn.innerHTML = "Krig";
      document.body.appendChild(btn);
      btn.addEventListener("click", hvemVinder)

      
      
            card1.textContent = 
                `${Player1[0].value} of 
                ${Player1[0].name}
                ${Player1[1].value} of 
                ${Player1[1].name}
                ${Player1[2].value} of 
                ${Player1[2].name}`
          
            card2.textContent =
                `${Player2[0].value} of 
                ${Player2[0].name}
                ${Player2[1].value} of 
                ${Player2[1].name}
                ${Player2[2].value} of 
                ${Player2[2].name}`
      
      /*Player1.push(Player1[i])
      Player1.push(Player2[i])
      Player1.splice(i, 1)
      Player2.splice(i, 1)

      Player2.push(Player1[i])
      Player2.push(Player2[i])
      Player1.splice(i, 1);
      Player2.splice(i, 1);*/
              
      player1Cards.appendChild(card1);
      player2Cards.appendChild(card2);
    
      console.log("Krig")
    }
    

    function ace_of_hearts{
      if(Player1 === Player2)
      console.log("jalla")
    }
    

    
    
