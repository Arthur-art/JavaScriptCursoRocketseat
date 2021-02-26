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

function cassino(N, k, m) {
 
  let array = [];

  let jogadores = 0;

  let funcionario1 = 0;

  let funcionario2 = 0;
  for (let i = 0; i < 1; i++) {
    for (let i = 0; i < N; i++) {
      jogadores += 1;

      array.push(jogadores);

      for (let i = 0; i < k; i++) {
        funcionario1 = array[i];
      }
    }

    console.log(funcionario1);

    let valueFunc1 = array.indexOf(funcionario1);
    delete array[valueFunc1];
    console.log(array);

    array.reverse();

    for (let i = 0; i < m; i++) {
      funcionario2 = array[i];
    }
  }

  let valueFunc2 = array.indexOf(funcionario2);
    delete array[valueFunc2];

  console.log(array);
  console.log(funcionario2);

}
cassino(10, 4, 3);
