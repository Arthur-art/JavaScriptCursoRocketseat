//Entendendo o codigo
const searchArray=(array)=>{
    let valuesearch=[];
    for(let i in array){
        let valuecomp=0;
        let count=0;
        valuecomp=array[i];
        for(let i in array){
            if(valuecomp===array[i]){
                count++;
                if(count>1){
                    count--;
                    valuesearch.push(array[i]);
                    delete array[i];
                }
            }
        }
    }
    return valuesearch;
}
let array=["Arthur","Arthur","Arthur","Ivar","Muskan","Dragon"];
console.log(searchArray(array));