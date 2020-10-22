console.log("If-satser");
let alder = 13;

/* 
    15 år och över: får köra moped
    16 år och över: får övningsköra
    18 år och över: får ta körkort
*/

if (alder >= 18) {
  console.log("Du får ta körkort, övningsköra och köra moped");
} else if (alder >= 16) {
  console.log("Du får övningsköra och köra moped");
} else if (alder >= 15) {
  console.log("Du får köra moped");
} else {
  console.log("Du är för ung för att köra bil och moped");
}
