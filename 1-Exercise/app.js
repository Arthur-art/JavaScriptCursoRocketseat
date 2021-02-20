//1-Declare uma variavel de nome weight
//let weight;

//2-Que tipo de dado é a variavel acima ?
//console.log(typeof weight);

/*3-Declare uma variavel e atribua valores para cada um dos dados:
    *name:String
    *agr:Number(integer)
    *stars:Number(float)
    *isSubscribed:Boolean
*/
/*let name="Arthur";
let age=24;
let stars=2.2;
let isSubscribed=true;*/

//4-A variavel student abaixo é de que tipo de dados ?
let student={};
console.log(typeof student);

//4.1-Atribua a ela as mesmas propriedades do exercicio 3.
student = {
    name:"Arthur",
    age:24,
    stars:2.2,
    weight:75.5,
    isSubscribed:true,
};

/*4.2-Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.
*/
console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.weight} kg.`)

/*5-Declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, 
ou seja, somente o array vazio.
*/
let students = [];

/*6-Coloque dentro do array acima o objeto da questao 4 na posicao zero*/
students = [student];
//console.log(students[0])

//8- Crie um novo student e coloque na posicao 1 do array students
const student2 = {
    name:"Ivar",
    age:24,
    stars:2.2,
    weight:75.5,
    isSubscribed:true,
};

students[1] = student2; 

console.log(students)



