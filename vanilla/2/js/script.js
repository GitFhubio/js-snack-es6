// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var arr1=['giacomo','peppe','filippo','antonio','giovanni','alfredo','archimede'];
while(isNaN(minimo) || minimo<0 || minimo>=arr1.length){
var minimo=parseInt(prompt('Inserisci minimo'));
if (minimo<0 || minimo>=arr1.length){
  alert('Devi inserire un valore tra 0 e'+(arr1.length-1))
}
}
while(isNaN(massimo) || massimo<=minimo || massimo>=arr1.length){
 var massimo=parseInt(prompt('Inserisci massimo'));
 if (massimo<0 || massimo>=arr1.length){
   alert('Devi inserire un valore tra '+minimo+' e'+(arr1.length-1));
 }
}

function traIndici(min,max,arrayIniziale)
{
var arr2=[];
while(min<=max)
{
   arr2.push(arrayIniziale[min]);
   min++;
}
// alternativa in cui ciclo tutti gli elementi
// for(var i=0;i>array.length,i++){
//  if(i>=min && i<=max)
// {
//   arr2.push(arrayIniziale[i]);
// }
// }

return arr2;
}

console.log(traIndici(minimo,massimo,arr1));
