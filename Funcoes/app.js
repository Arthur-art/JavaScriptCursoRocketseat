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
    },

    scope(subject){
        subject = "study";
        return subject;
    },

    callback(call){
        console.log('antes de executar a funcao callback');
        call();
        console.log('depois de executar a funcao callback');
    }
}
//ArrowFunction
/*const myName=(name)=>{
    console.log(name);
}
myName('Arthur');*/

/*let value=0;
console.log(functionBasic.count(value));*/

/*const sum = functionBasic.sum(40,50);
console.log(sum);*/

/*let subject;
console.log(subject);
console.log(functionBasic.scope(subject));*/

/*A function é executada ate o callback, mas ela so termina de ser executada se 
o callback for chamado como parametro*/
functionBasic.callback(function call(){
    console.log('ok')
});

