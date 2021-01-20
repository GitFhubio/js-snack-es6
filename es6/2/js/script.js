// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

const min=2;
const max=5;
const myarray=[1,2,4,5,6,3,7,5,4];
const FilteredArray=myarray.filter((element,index,array)=>{
  return index<max && index>min;
});
console.log(FilteredArray);
