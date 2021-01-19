// SNACK1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

const bici=[

{
  'nome':'rossa',
  'peso':10,
},
{
  'nome':'gialla',
  'peso':7,
},
{
  'nome':'oro',
  'peso':8,
},
{
  'nome':'verde',
  'peso':9,
}

]
let bicileggera=bici[0];

for (let i = 1; i < bici.length; i++) {
   if (bicileggera.peso>bici[i].peso){
    bicileggera=bici[i];
   }
}

// oppure
// var bicileggera;
// for (var i = 0; i < bici.length-1; i++) {
//    if (bici[i].peso>bici[i+1].peso){
//     bicileggera=bici[i+1];
//    }
// }

console.log(bicileggera);


// correzione ottavio



// SNACK2