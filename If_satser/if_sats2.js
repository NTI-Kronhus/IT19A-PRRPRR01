console.log("hej detta är if_sats lektion2")


/* Skriv ett program som låter användaren
mata in sin ålder. Programmet ska avgöra
om personen får kolla på en 15-årsgräns
film på bio */

/* Utöka programmet till att kolla om 
användaren får titta på en 7-årsgräns
film på bio */

/* Utöka programmet till att kolla om 
användaren får titta på en 18-årsgräns
film på bio */

let age = prompt("Hur gammal är du?");

if (age >= 18) {
    console.log("Du får se en 18-års film")
} else if (age >= 15){
    console.log("Du får se en 15-års film")
} else if (age >= 7){
    console.log("Du får se en 7 års film")
} else {
    console.log("Du får inte se på film")
}

console.log("Programmet fortsätter här")


// Uppgift
/* en enkelbiljett: 30kr
   en månadskort: 775kr 
   Fråga hur många gånger per månad användaren
   åker spårvagn och avgör om det är värt
   att köpa månadskort eller inte. 
   
   Skriv också ut hur mycket det skulle kosta med 
   engångsbiljetter. */
