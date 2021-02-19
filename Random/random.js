console.log("Random hej")
let slumptal = Math.random() // slumpmässigt tal mellan 0 och strikt mindre än 1 

console.log(slumptal)

let coinflip = Math.round(slumptal)

console.log(`Coin flip: ${coinflip}`)

/* utöka det här programmet sådant att 
    en 0 skriver ut tails
    en 1 skriver ut head
*/

// använd en if-sats 
if (coinflip == 1){
    console.log("Head")
} else{
    console.log("Tails")
}

// tärning 
/*  1. slå tärningen 100 gånger 
    2. räkna antalet sexor
*/ 
let sexor = 0

for (let i = 0; i < 100000; i++){
    let tärning = Math.floor(Math.random()*6)+1

    if (tärning == 6){
        sexor++;
    }
}

console.log(`Antalet sexor är: ${sexor}`)

let andel = sexor/100000
console.log(andel)
console.log(`Teoretisk sannolikhet ${1/6}`)

