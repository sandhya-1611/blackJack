// let firstcard = getRandom()
// let secondCard = getRandom()
let player ={
    name: "Sandhya",
    chips: 200  
}
let cards =[]
let sum = 0
let hasBlackJack = false
isAlive = true

let message = ""

let messageEl=document.getElementById("message-el")

let sumEl=document.getElementById("sum-el")

let cardsEl=document.getElementById("cards-el")


let playersEl = document.getElementById("player-el")
playersEl.textContent=player.name + ": $" + player.chips

function getRandom()
{
    let randomNo = (Math.floor(Math.random()*13)+1)
    if(randomNo>10)
    {
        return 10
    }
    else if(randomNo === 1)
    {
        return 11
    }
    else{
        return randomNo
    }
}

function startGame()
{
    isAlive=true
    let firstcard=getRandom()
    let secondCard=getRandom();
    cards=[firstcard,secondCard]
    sum=firstcard+secondCard
    renderGame();
}

function renderGame()
{
    cardsEl.textContent="Cards: " 

    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i] + " "
    }

    sumEl.textContent= "Sum: " + sum;
    if(sum<=20)
    {
        message = ("Do you want to draw a new card? ")
    }
    else if(sum === 21)
    {
        message = ("Wohoo! You've got a blackjack! ")
        hasBlackJack = true
    }
    else{
        message = ("You're out of the game! ")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{
    if(isAlive===true && hasBlackJack===false)
    {
        let card=getRandom()
        sum+=card
        cards.push(card)
        renderGame()
    }
}