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