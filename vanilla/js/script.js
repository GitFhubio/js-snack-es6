// SNACK1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

var bici=[

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

var bicileggera=bici[0];
for (var i = 1; i < bici.length; i++) {
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

// SNACK2
//
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var squadre = [
  {
    nome: 'Inter',
    punti_fatti: 0,
    falli_subiti: 0
  },
  {
    nome: 'Milan',
    punti_fatti: 0,
    falli_subiti: 0
  },
  {
    nome: 'Juve',
    punti_fatti: 0,
    falli_subiti: 0
  },
  {
    nome: 'Napoli',
    punti_fatti: 0,
    falli_subiti: 0
  }
];

function RandomNumber(max,min){
var Random=Math.floor(Math.random()*(max-min+1)-min);
return Random;
}

for (var i = 0; i < squadre.length; i++) {
  var thisTeam=squadre[i];
    thisTeam.punti_fatti=RandomNumber(0,10);
    thisTeam.falli_subiti=RandomNumber(1,10);
}

// creare nuovo array contenente tutti elementi del primo senza proprietà punti
var squadreB=[];

for (var i = 0; i < squadre.length; i++) {
  var oldTeam=squadre[i];
   squadreB.push({nome:oldTeam.nome,
   falli_subiti:oldTeam.falli_subiti});
  //
  // squadreB.push(squadre[i]['nome']);
  // squadreB.push(squadre[i]['falli subiti']);
}
console.log(squadreB);
