// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

let minimo;
let massimo;
const arr1=['giacomo','peppe','filippo','antonio','giovanni'];


 let input1=parseInt(prompt('Inserisci primo valore'));

 let input2=parseInt(prompt('Inserisci secondo valore'));

if(input2<input1){
minimo=input2;
massimo=input1;

} else if(input1<input2){
massimo=input2;
minimo=input1;
}

function traIndici(min,max,array){

const FilteredArray=array.filter((element,index,array)=>{
  return index<=max && index>=min;
});

return FilteredArray;
}

const arr=traIndici(2,5,[1,2,4,88,67,3,7,5,4]);
console.log(arr);
