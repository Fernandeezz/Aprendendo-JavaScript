//Not a Number
console.log(0/0);
console.log(parseInt('String'));

//True
console.log(isNaN(NaN));
//False
console.log(isNaN(10));
//True, por que a conversão para número falha
console.log(isNaN("String"));
//False, por que 100 não é NaN
console.log(Number.isNaN("100"));

console.log("----------------");

//Tipo Undefined
let x;
console.log(x);
function semRetorno(){
  //Sem instrução de retorno
}
//Mostra Undefined
console.log(semRetorno());
//Mostra Undefined
let objeto = {};
//Mostra Undefined
console.log(objeto.propriedadeInexistente);
// True
let y;
console.log(y === undefined); 

console.log("----------------");

//Condicionais - IF

let numero = 10;
if (numero > 5){
  console.log("O número é maior que 5.");
}

let idade = 15;
if (idade >= 18){
  console.log("Você é maior de idade.");
} else{
  console.log("Você é menor de idade");
}

console.log("----------------");

//Condicionais - Switch
let diaDaSemana = "Segunda";

switch (diaDaSemana){
  case "Domingo" : console.log("Hoje é dia de desvanso");
    break;
  case "Sábado" : console.log("Hoje é dia de Diversão");
    break;
    default : console.log("Dia útil");
}

console.log("----------------");

//Laços - FOR

for(let i = 0; i < 5; i++){
  console.log(i);
}

const pessoa = {
  nome: "Fernanda",
  idade: 20,
  cidade: "São Paulo"
};

for (let propriedade in pessoa){
  //Exibe nome, cidade e idade
console.log(propriedade);
  //Exibe os valores correspondentes
console.log(pessoa[propriedade]);
}

const frutas = ["Maçã", "Banana", "Uva", "Melância"];
for(let fruta of frutas){
  console.log(fruta);
}

console.log("----------------");

//Laços - WHILE, DO - WHILE

let contador = 0;
while(contador < 5){
  console.log(contador);
  contador++;
}

let j = 0;
do{
  console.log(j);
  j++;
} while (j < 0);

//Laços - Classes

class People{
  constructor(nome, idade){
    this.nome=nome;
    this.idade=idade;
  }
  saudacao(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
const pessoa1 = new People ('João', 30);
pessoa1.saudacao();

console.log("----------------");

//HERANÇA
class Estudante extends People{
  constructor(nome, idade, curso){
    //SUPER Chama o construtor d classe pai
    super(nome, idade) 
    this.curso = curso;
  }
  estuda(){
    console.log(`${this.nome} esta estudando ${this.curso}.`);
  }
}

const estudante1 = new Estudante('Maria', 25, 'Engenharia');
estudante1.saudacao();
estudante1.estuda();