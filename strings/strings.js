console.log("Strings")

// konkatenering

let fornamn = "Kokchun"
let efternamn = "Giang"
let namn = fornamn + " " + efternamn 
let adress = "Kronhusgatan 9"
let telefon = 112
let alder = 17

/* 
Namn: Kokchun Giang
Ålder: 17 år
Adress: Kronhusgatan 9
Telefon: 112
*/

console.log("Namn: " + namn +"\n" +"Adress: " + adress )

// skriv ut motsvarande personuppgifter i webbläsaren
let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>"+"Ålder: " + alder

// indexering 
let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)

// längden av en sträng
let antal_bokstaver = alfabet.length
console.log(`Antal bokstäver i alfabetet är ${antal_bokstaver}`)

/* 
    Räkna antalet ord i den här meningen: 
    Jag läser IT-programmet på NTI Kronhus i Göteborg. 
*/

let mening = "Jag läser IT-programmet på NTI Kronhus i Göteborg"
let ord = mening.split(" ")

console.log(ord)
console.log(ord[2])

let antal_ord = ord.length
console.log(`Antal ord i meningen är ${antal_ord}`)


/* 
    Räkna antalet vokaler i ordet: "LatjoLajban"
*/







// slice 

// sökning

// split 
