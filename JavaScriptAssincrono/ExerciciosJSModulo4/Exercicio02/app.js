/*Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/arthur-art/repos*/

var input = document.querySelector('#input input');
var button = document.querySelector('#input button');
var ul = document.querySelector('#ul');
var getUser = function(){
    return new Promise(function(resolve, reject){
       
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+input.value);
        xhr.send(null);

        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject('Error');
            }
         }
        }
    });
}
button.onclick = function(){
getUser()
.then(function(response){
    console.log(response.blog);
    var textblog = document.createTextNode(JSON.stringify(response.blog));
    console.log(textblog);
    var li = document.createElement('li');

    ul.appendChild(li);
    li.appendChild(textblog);
    
})
.catch(function(error){
    console.warn(error);
});
};


