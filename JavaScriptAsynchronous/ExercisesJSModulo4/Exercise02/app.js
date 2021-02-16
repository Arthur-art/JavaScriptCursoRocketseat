/*Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/arthur-art/repos*/

var button = document.querySelector('#input button');
var input = document.querySelector('#input input');
var ulElement = document.querySelector('#ul');

var myPromise = function(){
    ulElement.innerHTML='';
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+input.value);
        xhr.send(null);

        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Usuario não existe');
                }
            }
        }
    });
}

button.onclick = function(){
    myPromise()
    .then(function(response){
        console.log(response);
        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', response.avatar_url);
        var liElement = document.createElement('li');
        liElement.appendChild(imgElement);
        ulElement.appendChild(liElement);

    })
    .catch(function(error){
        alert(error);
    });
}





