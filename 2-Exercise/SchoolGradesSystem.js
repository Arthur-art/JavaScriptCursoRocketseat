//Transformar notas escolares no sistema numerico para o sistema de caracteres tipo A,B,C,D,F

const Notas ={
     
    notaMax(nota){

        let notaA = nota >= 90;
        let notaB = nota >= 80 && nota <= 89;
        let notaC = nota >= 70 && nota <= 79;
        let notaD = nota >= 80 && nota <= 89;
        let notaF = nota < 60;

        if(notaA){
            console.log('A')
        }else if(notaB){
            console.log('B')
        }else if(notaC){
            console.log('C')
        }else if(notaD){
            console.log('D')
        }else if(notaF){
            console.log('F')
        }   
    }
}

Notas.notaMax(87); 