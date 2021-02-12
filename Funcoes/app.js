const functionBasic={
    count(value){
      
        for(let i=0;i<100;i++){
            console.log(value);
            value++;
        }
        return value;
    }
}
let value=0;
console.log(functionBasic.count(value));