/*Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch*/

var checaIdade = function(){
    return new Promise(function(resolve, reject){

        if(idade >= 18){
            resolve('Maior de idade');
        }else{
            reject('Menor de idade');
        }
    });
}

var idade = 100;

checaIdade(idade)
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});