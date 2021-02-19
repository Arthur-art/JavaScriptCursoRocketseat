//Operators:

//Binary
let number = 1;
//console.log(number+1);

//Unary

//console.log(++number);

//Ternary

//console.log(true ? "ok" : "not ok");

/*FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatorio(condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log(0 ? 'verdadeiro' : 'falso');

/*TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatorio(condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infiniy
    -Infinity
*/
console.log("0" ? 'verdadeiro' : 'falso');