//resto da divisao %
function remainder(a, b) {
  return a % b;
}

let teste = remainder(13, 11);

//console.log(teste);

//exponencial

function expo(a, b) {
  return a ** b;
}

//console.log(expo(10,20));

//Grouping operator ()

function groupingOperator(a, b, c) {
  return (a + b) * c;
}

//console.log(groupingOperator(12, 21, 3));

//Contando apenas os pares

let numbers = 6;

function Rest(number) {
  let num = 0;
  for (let i = 0; i < number; i++) {
    ++num;
    if (num % 2 == 0) {
      //console.log(num);
    }
  }
}
Rest(numbers);


