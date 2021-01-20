// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function TraIndici(min,max,array){

const FilteredArray=array.filter((element,index,array)=>{
  return index<max-1 && index>=min;
});

return FilteredArray;
}

const arr=TraIndici(2,5,[1,2,4,5,6,3,7,5,4]);
console.log(arr);
