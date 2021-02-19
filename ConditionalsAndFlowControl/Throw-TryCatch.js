// throw

function sayMyName(name){
    if(name === ''){
        throw 'Nome é obrigatorio'
    }
   
}
let name = '';


// try catch

try{
    sayMyName(name);
}catch(error){
    console.log(error);
}



console.log('apos capturar o erro');
