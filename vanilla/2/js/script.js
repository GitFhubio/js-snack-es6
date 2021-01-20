// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function traIndici(min,max,arrayIniziale)
{
var arrayFinale=[];
while(min<max-1) //mi riporto al caso umano con indici esclusi
{
   arrayFinale.push(arrayIniziale[min]);
   min++;

}
return arrayFinale;
}


var arr=traIndici(2,5,[3,4,5,7,3,6,8]);
console.log(arr);
