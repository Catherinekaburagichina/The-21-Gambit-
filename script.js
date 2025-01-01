

let cards = []
let sum = 0


let hasBlackJack = false
let isAlive = false
let message = " "


// stores the message el content in a variable.
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el") 
let playerEl = document.getElementById("player-el")
// Grabbing elements from the dom.
playerEl.textContent = player.name + ": $" + player.coins;

function getRandomCard(){
let randomNumber = Math.floor(Math.random()*13)+1 
if(randomNumber>10){
    return 10
}else if(randomNumber === 1){
    return 11
}
else 
return randomNumber

}

function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 

    renderGame()
}

function renderGame(){

//    renders the message using text content
cardsEl.textContent = "Cards :" 
//  + cards[0] +" " + cards[1]

for(i= 0; i<cards.length; i+=1){
    cardsEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum:" + sum 
// sum makes sure we dont clear/directly replace the existing text
    if(sum<=20){
        message = "Do you want to draw a new card?🙂"
    }
    
    else if(sum === 21){
      message = "You've got blackjack 🥳"
      hasBlackJack = true
    }
    else{
        message = "You're out of the game 😭"
        isAlive = false
    }
    messageEl.textContent = message
    // Nan
}


function newCard(){
    if(isAlive === true && hasBlackJack === false ){
        let card = getRandomCard()

        sum += card
    
        cards.push(card)
    
    
        renderGame()
    }
   
}


