/*DESAFIO

Nos cassinos da Eslovênia, apostadores serão colocados em um grande círculo, voltados para dentro. Alguém é escolhido arbitrariamente como número 1, 

e os outros são numerados no sentido horário até N (os quais estarão à esquerda do 1°). Partindo do 1° e movendo-se no sentido horário, 

um funcionário do cassino conta k posições e retira um apostador, enquanto outro funcionário começa a partir de N e se move no sentido anti-horário, 

contando m posições e retirando outro apostador. Os dois que são escolhidos são então removidos do círculo e se ambos os funcionários escolherem a mesma pessoa, 

ela (ele) ganha um brinde exclusivo do cassino. Cada funcionário, em seguida, começa a contar novamente com a pessoa próxima disponível e o processo continua até que 

não reste ninguém, os últimos selecionados são os ganhadores. Note-se que os dois apostadores deixam o anel ao mesmo tempo, por isso é possível que um funcionário 

conte a pessoa já selecionado pelo outro funcionário.

###Entrada

Escreva um programa que leia sucessivamente três números (N, k e m; k, m > 0, 0 < N < 20) e determina a ordem no qual os apostadores são 

retirados do círculo. Cada conjunto de três números estará em uma linha distinta e o final da entrada de dados é sinalizado por três zeros (0 0 0).

###Saída

Para cada conjunto de três números de entrada, imprima uma linha de números especificando a ordem na qual as pessoas são escolhidas. 

Liste o par escolhido partindo da pessoa escolhida pelo contador do sentido horário. Os pares sucessivos são separados por vírgula 

(mas não deverá haver vírgula após o último escolhido).


*Alguém é escolhido arbitrariamente como número 1

*e os outros são numerados no sentido horário até N (os quais estarão à esquerda do 1°)

*Partindo do 1° e movendo-se no sentido horário, um funcionário do cassino conta k posições e retira um apostador

*enquanto outro funcionário começa a partir de N e se move no sentido anti-horário

*contando m posições e retirando outro apostador

*Os dois que são escolhidos são então removidos do círculo

*e se ambos os funcionários escolherem a mesma pessoa, ela (ele) ganha um brinde exclusivo do cassino

*Cada funcionário, em seguida, começa a contar novamente com a pessoa próxima disponível e o processo continua até que 

não reste ninguém, os últimos selecionados são os ganhadores.




*/

function slovenianCasino(amountPlayers, clockwise, anticlockwise) {
  let arrayPlayers = [];
  let selectedPlayers = 0;
  let employeeChoice1 = 0;
  let employeeChoice2 = 0;
  //Separando players e empurrando dentro de arrayPlayers
  for (let i = 0; i < amountPlayers; i++) {
    selectedPlayers += 1;
    arrayPlayers.push(selectedPlayers);
  }
  //Percorrendo o array em sentido horario baseado no tamanho da variavel clockwise
  //Inserindo o dado encontrado no array dentro da variavel functionary1
  for (let i = 0; i < clockwise; i++) {
    employeeChoice1 = arrayPlayers[i];
  }
  //Encontrando a posicao do dado inserido em functionary1
  let valueFunc1 = arrayPlayers.indexOf(employeeChoice1);
  //Apagando o dado na posicao em que o dado foi encontrado em functionary1 no arrayPlayers
  delete arrayPlayers[valueFunc1];
  //Invertendo o array em sentido antihorario
  arrayPlayers.reverse();
  //Percorrendo o array em sentido horario baseado no tamanho da variavel anticlockwise
  for (let i = 0; i < anticlockwise; i++) {
    employeeChoice2 = arrayPlayers[i];
  }
  //Encontrando a posicao do dado inserido em functionary2
  let valueFunc2 = arrayPlayers.indexOf(employeeChoice2);
  //Apagando o dado na posicao em que o dado foi encontrado em functionary2 no arrayPlayers
  delete arrayPlayers[valueFunc2];
  arrayPlayers.reverse();
  let arrayPlayers2 = [];
  arrayPlayers2.push(arrayPlayers);
  console.log(arrayPlayers2);
  console.log(employeeChoice1);
  console.log(employeeChoice2);
}
slovenianCasino(10, 4, 3);
