console.log("For-sats");

// skapat en lista som heter matsedel. Den innehåller 5 strings
let matsedel = [
  "Vegetarisk lasagne",
  "Chili sin Carne",
  "Korv stroganof",
  "Ärtsoppa och pannkakor",
  "Kyckling",
];

let veckodagar = ["måndag", "tisdag", "onsdag", "torsdag", "fredag"];

console.log("Bambamat i NTI Kronhus");

for (let i = 0; i < veckodagar.length; i++) {
  let veckodag = veckodagar[i];
  let mat = matsedel[i];
  console.log(`På ${veckodag} äter vi ${mat}, yummy`);
}
