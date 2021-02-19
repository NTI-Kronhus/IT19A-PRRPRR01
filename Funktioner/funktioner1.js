let namn = "Kokchun" // den här variabeln har ett globalt scope

function sayHello(){
    let alder = 16 // lokal variabel, synlig i funktionen och inte utanför
    console.log(`Hej ${namn}, du är ${alder} år gammal`)

}

// anropar funktionen sayHello
sayHello()
sayHello()
//console.log(`Min ålder är ${alder}`) //- alder är inte synlig här

function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`)

// skapa en subtraherafunktion 
function subtrahera(tal1,tal2){
    let differens = tal1-tal2
    return differens
}

console.log(`10-12=${subtrahera(10,12)}`)

function dividera(tal1,tal2){
    if (tal2 == 0){
        return "får ej dela med 0"
    }
    let kvot = tal1/tal2
    return kvot
}

console.log(`35/7 = ${dividera(35,7)}`)
console.log(`2/0 = ${dividera(2,0)}`)

function cirkelArea(radie){
    let area = Math.PI*radie**2
    return area
}

let area10 = cirkelArea(10)
// anropa cirkelArea: 
console.log(`Arean av en cirkel med radie 10 l.e. är ${area10} a.e. `)