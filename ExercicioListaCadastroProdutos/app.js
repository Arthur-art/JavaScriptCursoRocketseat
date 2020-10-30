var ul = document.querySelector('#safe ul');
var input = document.querySelector('#input input');
var button = document.querySelector('#input button');


var lista = JSON.parse(localStorage.getItem('lista')) || [];

function renderList(){

    ul.innerHTML='';
    for(produtos of lista){


        var produtoText = document.createTextNode(produtos);
        var li = document.createElement('li');
        li.appendChild(produtoText);
        ul.appendChild(li);

        var link = document.createElement('a');
        var textlink = document.createTextNode('Excluir');
        li.appendChild(link);
        link.appendChild(textlink);
        link.setAttribute('href', '#');
        var pos = lista.indexOf(produtos);
        link.setAttribute('onclick', 'excl('+pos+')');

       

    }
}

function add(){
    lista.push(input.value);
    renderList();
    storage();

}

function excl(pos){
    lista.splice(pos, 1);
    renderList();
    storage();
}

function exclAll(pos){
    lista.splice(pos);
    renderList();
    storage();
}

function storage(){
    localStorage.setItem('lista', JSON.stringify(lista));
}

button.onclick= add;
renderList();