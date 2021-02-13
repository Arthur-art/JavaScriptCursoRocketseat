function Person(nome,idade,cidade,rua){
    this.nome=nome;
    this.idade=idade;
    this.cidade=cidade;
    this.rua=rua;
}
const arthur=new Person("Arthur",24,"Contagem","Milanez");
console.log(arthur);