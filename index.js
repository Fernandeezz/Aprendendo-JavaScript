//Primeira Aula de JavaScript

const ano = 1991;
let atrasoEmSegundos = 0.00016;
let area= (16*3.14);
let metadeArea = area/2;

console.log("Ano: " + ano);
console.log("Atraso em Segundos: " + atrasoEmSegundos);
console.log("Área: " + area);
console.log("Tipo: " + typeof metadeArea);

console.log("------------------")

let a = 10;
let b = 0x10; 
let c = 0o10;
let d = 0b10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("------------------")

let x = 9e3;
let y = 123e-5;

console.log(x);
console.log(y);

console.log("------------------")

let z = 0x21;
console.log(z);

console.log("------------------")

let pais = "Brasil";
let continente = "América do Sul";

console.log(pais);
console.log(typeof pais);
console.log(continente);
console.log(typeof continente);

let message1 = "O návio 'Mars' fez escala no porto.";
let message2 = 'Chuva forte passará perto da cidade de São Paulo.'

console.log(message1);
console.log(message2);

console.log("------------------")

let nome = "João";
let idade = 30;

let mensagem = "Olá, " + nome + "! Você tem " + idade + " anos.";
let mensagem2 = `Olá, ${nome}! Você tem ${idade} anos.`

console.log(mensagem);
console.log(mensagem2);

console.log("------------------")

let multiLineString = 'Está é uma string que abrange múltiplas linhas sem a necessidade de usar o caractere de quebra de linha \n.';

console.log(multiLineString);

console.log("------------------")

let texto = "Olá, mundo!";

console.log(texto.startsWith("Olá"));
console.log(texto.endsWith("mundo!"));
console.log(texto.includes("mundo"));
console.log("abc".repeat(3));

console.log("------------------");

let caminho = String.raw`C:\Users\João\Documents`;
console.log(caminho);

console.log("------------------");

let text = "JavaScript";
console.log(text.charAt(4));

console.log("------------------");

let frase = "O gato subiu no telhado e depois pulou.";
console.log(frase.indexOf("gato"));
console.log(frase.lastIndexOf("pulou"));

console.log("------------------");

let palavra = "abcdefgh";
console.log(palavra.substring(2, 5));

console.log("------------------");

let frase2 = "Esta é uma string";
console.log(frase2.slice(5, 7));

console.log("------------------");

let lista = "Maçã,banana, uva,melância";
let frutas = lista.split(",");
console.log(frutas);

console.log("------------------");

let isDataValida = true;
let isGameOver = false;

console.log(false);
console.log(typeof false);
console.log(isDataValida);
console.log(typeof isDataValida);
console.log(isGameOver);
console.log(typeof isGameOver);

console.log("------------------");

let resultadoSoma;

function soma(a, b){
  return a + b;
}

resultadoSoma = soma(1, 2);
console.log("Resultado da soma é: " + resultadoSoma);

console.log("------------------");

let multiplicar = function (a, b){
  return a * b;
}
console.log("Resultado da multiplicação é: " + multiplicar(4, 3));

let usuario1 = {}
console.log(usuario1);
console.log(typeof usuario1);

let usuario2 = {
  nome: "Fernanda",
  sobrenome: "Fernandes",
  idade: 20,
  email: "nandafernandes259@gmail.com"
}

console.log(usuario2.nome + " " + usuario2.sobrenome);
console.log(usuario2.idade);
console.log(usuario2.email);

let usuario3 = {
  nome: "Maria",
  sobrenome: "Silva",
  idade: 30,
  email: "maria.silva@gmail.com"
}

console.log(usuario3.nome + " " + usuario3.sobrenome);
usuario3.idade = 30;
console.log(usuario3.idade);

console.log("------------------");

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  acelerar:function(){
    console.log("O carro está acelerando");
  }
};
carro.acelerar();

console.log("------------------");

let numeros = [1, 2, 3, 4, 5];
let nomes = ["Fernanda", "Nycolas", "Cláudio", "Lais"];
let misto = [1, "Fernanda", true, {chave:"valor"}];

console.log(numeros[0]);
console.log(nomes[1]);

for (let i = 0; i < numeros.length; i++){
  console.log(numeros[i]);
}

numeros.forEach(function(numero){
  console.log(numero);
})

let dobro = numeros.map(function(numero){
  return numero * 2;
});
console.log(dobro);

//Adiciona o número 6
numeros.push(6);
console.log(numeros);

//Exibe Tudo
numeros.pop();
console.log(numeros);

//Exibe a partir do número 2
numeros.shift();
console.log(numeros);

//Exibe o 0 mas não o 1
numeros.unshift(0);
console.log(numeros);

//Remove 1 e 3 e mostra só o restante
let parte = numeros.slice(1, 3);
console.log(parte);

//Exibe 1
console.log(numeros.indexOf(2));

//Exibe 1
console.log(numeros.lastIndexOf(2));

//Exibe True
console.log(numeros.includes(3));

// Destructuring

const number = [1, 2, 3];
const [l, k, j] = numeros;

console.log(l);
console.log(k);
console.log(j);

const [primeiro, , terceiro] = number;

console.log(primeiro);
console.log(terceiro);

const [p = 10, q = 20, r = 30] = [5, ,25];

console.log(p);
console.log(q);
console.log(r);