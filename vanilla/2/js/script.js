// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function traIndici(min,max,arrayIniziale)
{
var arrayFinale=[];
while(min<=max) //mi riporto al caso umano con indici esclusi
{
   arrayFinale.push(arrayIniziale[min]);
   min++;
}
return arrayFinale;
}

var arr=traIndici(2,5,[1,2,4,5,6,3,7,5,4]);
console.log(arr);
