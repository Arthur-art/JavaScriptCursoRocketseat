const functionBasic={
    count(value){
      
        for(let i=0;i<100;i++){
            console.log(value);
            value++;
        }
        return value;
    },

    sum(a,b){
        return a+b;
    }
}

const soma = functionBasic.sum(40,50);

console.log(soma);