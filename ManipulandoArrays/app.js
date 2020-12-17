let arr = ["html","css","javascript","nodejs","react","reactnative"];
//adicionar no fim
arr.push(4);
//adicionar no começo
arr.unshift(12);
//remover do fim
arr.pop();
//remover do começo
arr.shift();
//pegar somente alguns elementos do array
//console.log(arr.slice(1, 2));
//remover 1 ou mais itens em qualquer posição do array
//arr.splice(1, 3)
//encontrar a posicao de um elemento no array
let index = arr.indexOf("nodejs");
arr.splice(index, 1);


console.log(arr);