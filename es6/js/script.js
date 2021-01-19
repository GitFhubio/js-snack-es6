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
    squadre[i].punti_fatti=RandomNumber(0,10);
    squadre[i].falli_subiti=RandomNumber(1,10);
}

// creare nuovo array contenente tutti elementi del primo senza proprietà punti
const squadreB=[];

for (let i = 0; i < squadre.length; i++) {
  let{nome,falli_subiti}=squadre[i];
   // squadreB.push({nome: nome,
   // falli_subiti:falli_subiti});
   squadreB.push({nome,falli_subiti});

}
console.log(squadreB);
