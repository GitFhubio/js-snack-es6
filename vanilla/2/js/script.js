// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var minimo;
var massimo;
var arr1=['giacomo','peppe','filippo','antonio','giovanni'];
 var input1=parseInt(prompt('Inserisci primo valore'))}
 var input2=parseInt(prompt('Inserisci secondo valore'));

if(input2<input1){
minimo=input2;
massimo=input1;

} else if(input1<input2){
massimo=input2;
minimo=input1;
}
function traIndici(min,max,arrayIniziale)
{
var arr2=[];
while(min<=max)
{
   arr2.push(arrayIniziale[min]);
   min++;
}
return arr2;
}

console.log(traIndici(minimo,massimo,arr1));
