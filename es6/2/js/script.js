// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


const arr1=['giacomo','peppe','filippo','antonio','giovanni'];
let input1;
let input2;
while(isNaN(input1) || input1<0 || input1>arr1.length){
input1=parseInt(prompt('Inserisci minimo'));
if (isNaN(input1) || input1<0 || input1>=arr1.length){
  alert('Devi inserire un valore tra 0 e'+(arr1.length-1))
}
}
while(isNaN(input2) || input2<=input1 || input2>=arr1.length){
input2=parseInt(prompt('Inserisci massimo'));
if (input2<0 || input2>=arr1.length){
  alert('Devi inserire un valore tra '+input1+' e'+(arr1.length-1))
}
}
function traIndici(min,max,array){
const FilteredArray=array.filter((element,index,array)=>{
  return index<=max && index>=min;
});

return FilteredArray;
}

console.log(traIndici(input1,input2,arr1));


//
// const arr1=['giacomo','peppe','filippo','antonio','giovanni','alfredo','archimede'];
//  const minimo=parseInt(prompt('Inserisci minimo'))}
//  const massimo=parseInt(prompt('Inserisci massimo'));
//
// function traIndici(min,max,arrayIniziale)
// {
// const arr2=[];
//
// // for(let i=0;i>array.length,i++){
// //  if(i>=min && i<=max)
// // {
// //   arr2.push(arrayIniziale[i]);
// // }
// // }
//
// arrayIniziale.forEach((elem,index) =>{
//   if(index>=min && i<=max)
//   {
//     arr2.push(elem;);
//   }
// }
//
// return arr2;
// }
//
// console.log(traIndici(minimo,massimo,arr1));

// note
// il filter a differenza del foreach returna un array
// map va bene quando voglio modificare valori elementi array



// ulitità map non è per filtrare;

// function arrayToUpperCase(array){
//
// const newArray=array.map((elem)=>{
// return elem.toUpperCase();
// });
//
// return newArray;
// console.log()

// es5
// function somma(a,b){
//   return a+b;
// }
// somma(1,2);
// // es6
// const somma=(a,b) =>{return a+b}
// somma(1,2);


//operator spread per array
//
// const arrayInvitati=["Mario","Michela","Fabio"];
// const arraySpecialGuest=["Giovanna","Emanuela","Carlo"];
//
// arraySpecialGuest.forEach((element,index)=>
// {
//   arrayInvitati.push(elem);
// }
//
//
// arrayInvitati=[...arrayInvitati,...arraySpecialGuest];

// const arrayPartecipanti=["Maria","Fabio","Carlo","Vito"];
// const arrayNonPartecipanti=["Marco","Mirco","Giuseppe"];
// const invitati=[...arrayPartecipanti,...arrayNonPartecipanti];
// const arrayIndecisi=["Adele","Teresa","Gianpaolo"];
// l\'alternativa sarebbe stata
//
// const invitati=[];
//
// arrayPartecipanti.forEach((element) =>{
//   invitati.push(elem);
// }
//
// )
// arrayNonPartecipanti.forEach((element) =>{
//   invitati.push(elem);
// }
//
// )

// spread operator per oggetti

// let persona={
//   nome:'Marco',
//   cognome:'Rossi',
//   eta:25
// }
// deve avere stesse proprietà piu altre due

// let personaInvitata {
//
// nome:persona.nome,
// cognome:persona.cognome,
// eta:persona.eta,
// invitato:true,
// partecipera:false
// }
//
// let personaInvitata {
// ...persona, //ho creato copia  di fatto cui ho aggiunto altre proprietà
// invitato:true,
// partecipera:false
// }
//
// prende tutte proprietà di persona e poi ne aggiunge due
