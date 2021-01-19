// SNACK1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

const bici=[

{
  nome:'rossa',
  peso:10,
},
{
  nome:'gialla',
  peso:7,
},
{
  nome:'oro',
  peso:8,
},
{
  nome:'verde',
  peso:9,
}

]
let bicileggera=bici[0];

for (let i = 1; i < bici.length; i++) {
   if (bicileggera.peso>bici[i].peso){
    bicileggera=bici[i];
   }
}

const{nome,peso}=bicileggera;

console.log(`La bici leggera è quella ${nome} che ha peso ${peso}`);


// SNACK2


// SNACK2
//
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//
// const squadre = [
//   {
//     nome: 'Inter',
//     puntifatti: 0,
//     fallisubiti: 0
//   },
//   {
//     nome: 'Milan',
//     puntifatti: 0,
//     fallisubiti: 0
//   },
//   {
//     nome: 'Juve',
//     puntifatti: 0,
//     fallisubiti: 0
//   },
//   {
//     nome: 'Napoli',
//     puntifatti: 0,
//     fallisubiti: 0
//   }
// ];
// // le arrow functions le vedremo domani vabbè
// // const RandomNumber = (base) => Math.floor(Math.random() * base) + 1;
// for (let i = 0; i < squadre.length; i++) {
//     squadre[i].puntifatti=Math.floor(Math.random()*100+1);
//     squadre[i].fallisubiti=Math.floor(Math.random()*100+1);
//   }
//      //
//      // squadre[i].puntifatti=RandomNumber(100);
//      // squadre[i].fallisubiti=RandomNumber(100);
//
// for (let i = 0; i <squadre.length; i++) {
// const{nome,fallisubiti}=squadre[i];
// console.log(nome,fallisubiti);
// }
//
// // reference:https://medium.com/@seanmcp/js-basics-random-number-680fa269c4d7


const squadre = [
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
return Math.floor(Math.random()*(max-min+1)+min);
}

for (let i = 0; i < squadre.length; i++) {
  let thisTeam=squadre[i];
    thisTeam.punti_fatti=RandomNumber(0,10);
    thisTeam.falli_subiti=RandomNumber(1,10);
}

// creare nuovo array contenente tutti elementi del primo senza proprietà punti
const squadreB=[];

for (let i = 0; i < squadre.length; i++) {
  let oldTeam=squadre[i];
  let{nome,falli_subiti}=oldTeam;
   // squadreB.push({nome: nome,
   // falli_subiti:falli_subiti});
   squadreB.push({nome,falli_subiti});



}
console.log(squadreB);
