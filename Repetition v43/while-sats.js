console.log("While-sats");

/* 
    I en ö finns det 8000 fåglar 
    Miljögifter har släppts ut (ajajaj)
    Fågelbeståndet halveras varje år
    Efter hur många år, återstår en tiondel av fågelpopulationen?
*/

// I en ö finns det 8000 fåglar
let faglar = 8000;
let ar = 0;

console.log(`År: ${ar} fanns ${faglar} fåglar`);

while (faglar >= 800) {
  // Fågelbeståndet halveras varje år
  faglar = faglar / 2;
  ar = ar + 1;
  console.log(`År: ${ar} fanns ${faglar} fåglar`);
}

console.log(`Efter ${ar} år återstår mindre än en tiondel av ursprungliga fågelbeståndet`);
