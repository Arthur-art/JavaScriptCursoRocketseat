var input = document.querySelector('#input input');
var button = document.querySelector('#input button');
var ul = document.querySelector('#safe ul');

var produtos = JSON.parse(localStorage.getItem('lista_compras')) || [];

function renderProdutos(){
    ul.innerHTML='';
    
    for(produto of produtos){

        var textProduto = document.createTextNode(produto);
        var li = document.createElement('li');
        li.appendChild(textProduto);
        ul.appendChild(li);

        var linkExcluir = document.createElement('a');
        linkExcluir.setAttribute('href', '#');
        li.appendChild(linkExcluir);
        var textExcluir = document.createTextNode('Excluir');
        linkExcluir.appendChild(textExcluir);

        var pos = produtos.indexOf(produto);
        linkExcluir.onclick = deleteProdutos;

    }
}


function addProdutos(){

    var valueInput = input.value;
    produtos.push(valueInput);
    renderProdutos();
    saveToStorage();
}

function deleteProdutos(pos){
    produtos.splice(pos, 1);
    renderProdutos();
    saveToStorage();
}

function deleteAll(pos){
    produtos.splice(pos);
    renderProdutos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('lista_compras', JSON.stringify(produtos));

}

button.onclick = addProdutos;
renderProdutos();