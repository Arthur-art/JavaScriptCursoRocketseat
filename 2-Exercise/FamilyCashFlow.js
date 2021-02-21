/*Crie uma funcao para calcular o total de receitas e despesas, mostre se o saldo é positivo ou negativo
seguido do valor do saldo*/

const Utils = {
  familyCashFLow(receitas, despesas, saldo) {
    let valueReceitas = 0;
    let valueDespesas = 0;
    for (let i in receitas) {
      valueReceitas += receitas[i];
      
    }
    //console.log(valueReceitas);
    
      for (let i in despesas) {
        valueDespesas += despesas[i];
       
      }
      //console.log(valueDespesas);

      saldo = valueReceitas - valueDespesas;
      //console.log(saldo);

      if(saldo == 0){
          console.log('saldo igual a '+saldo+' reais')
      }else if(saldo < 0 ){
        console.log('saldo negativo igual a '+saldo+' reais')
      }else if(saldo > 0 ){
          console.log('saldo positivo igual a '+saldo+' reais')
      }
  },
};

let receitas = [12,12,12,100];
let despesas = [12,12,12,100];

Utils.familyCashFLow(receitas,despesas);