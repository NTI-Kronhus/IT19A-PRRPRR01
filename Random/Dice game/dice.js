/* Player 1: roll a dice */
/* Player 2: rolls a dice */
/* One with highest number wins */

let diceNumber1 = 0
let diceNumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")
let p1_result = document.querySelector("#p1_result")
let p2_result = document.querySelector("#p2_result")
let check_btn = document.querySelector("#buttonCheck")
let result = document.querySelector("#result")

/* 1. Gör så att knappen check win, skriver ut vinnaren i konsolen */
/* 2. Gör så att den skriver ut i webbläsaren vem som vinner */

dice1_btn.addEventListener("click", diceRoll1)
dice2_btn.addEventListener("click", diceRoll2)
check_btn.addEventListener("click", checkWin)


function diceRoll1(){
    diceNumber1 = 1+Math.floor(Math.random()*6)
    p1_result.innerHTML = diceNumber1
    console.log(diceNumber1)
}

function diceRoll2(){
    diceNumber2 = Math.floor(Math.random()*6)+1
    p2_result.innerHTML = diceNumber2
}

function checkWin(){
    if (diceNumber1 > diceNumber2){
        console.log("Player 1 wins")
        result.innerHTML = "Player 1 wins"
    } else if (diceNumber1 < diceNumber2){
        console.log("Player 2 wins")
        result.innerHTML = "Player 2 wins"
    } else {
        console.log("Draw")
        result.innerHTML = "DRAW"
    }
}

