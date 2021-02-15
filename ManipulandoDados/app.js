//Entendendo o codigo
const searchArray=(array)=>{
    let valuesearch=[];
    for(let i in array){
        let valuecomp=0;
        let count=0;
        valuecomp=array[i];
        console.log(valuecomp);
        //console.log(array);
        for(let i in array){
            if(valuecomp===array[i]){
                count++;
                if(count>1){
                    count--;
                    valuesearch.push(array[i]);
                    delete array[i];
                    console.log(valuesearch);
                }
            }
        }
    }
    return valuesearch;
}
let array=[1,1,5,2];
searchArray(array);