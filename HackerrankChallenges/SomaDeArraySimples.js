//Dado um array de inteiros, encontre a soma de seus elementos.
let array=[1,1,1,1,1];

const soma = {
    somaArray(array){
       let total=0;
       for(let i in array){
           total+=array[i];
       }
       return total;
    }
}

console.log(soma.somaArray(array));