console.log("hej")
let h1_titel = document.querySelector("#titel");
let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")

// skriv while-sats i titel
h1_titel.innerHTML = "while-sats"

let n = 1

while (n <= 10){
    p_talserie1.innerHTML += `${n} `
    n+=3 // n ökas med 2
}
// skriv ut 10,9,8,7,6,5,4,3,2,1,0
// i webbläsaren

let k = 10

// skriv ut 10,9,8,...,-9,-10
while (k >= -10){
    p_talserie2.innerHTML += `${k} `
    k--
}


