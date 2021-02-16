//Dado um array de inteiros, encontre a soma de seus elementos.
let array=[213213,23142,24124,6546,6456,5464,6453,21431,1434,13412,132412,134124,
    43222,2143,142,424,14,424,2432,4214124,1234,14124,14,244,342,43,4242,421,423,45,345,
    325,35,6,6,56,57,7,53,24,24,425,325,5,345,44,5,5,32,];

const sum = {
    sumArray(array){
       let total=0;
       for(let i in array){
           total+=array[i];
       }
       return total;
    }
}

console.log(sum.sumArray(array));