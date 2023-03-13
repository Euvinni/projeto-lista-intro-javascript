// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt(`Digite uma altura para o retangulo:`)
const largura = prompt(`Digite uma largura para o retangulo:`)
const area = altura * largura
console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt(`Digite o ano atual:`)
const anoNascimento = prompt(`Digite o ano de nascimento:`)
const suaIdade = anoAtual - anoNascimento
console.log(suaIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const IMC = peso / (altura * altura)
return IMC
}
calculaIMC(80, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const userName = prompt(`Digite o seu nome?`)
const userAge = prompt(`Digite a sua idade?`)
const userEmail = prompt(`Digite o seu email?`)

console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
var corFav1 = prompt(`Qual a sua primeira cor favorita?`)
var corFav2 = prompt(`Qual a sua segunda cor favorita?`)
var corFav3 = prompt(`Qual a sua terceira cor favorita?`)

var nomeDasCores = [corFav1, corFav2, corFav3]
console.log(nomeDasCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const frase = string.toUpperCase()
return frase
}



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const numeros = array [0]
const numeros1 = array[array.length -1]  
array[0] = numeros1
array[array.length-1] = numeros
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = prompt(`Digite o ano atual:`)
const anoNascimento = prompt(`Digite o ano de nascimento:`)
const anoEmissaoRG = prompt(`Digite a sua indentidade`)
const idade = anoAtual - anoNascimento
const dataEmissao = anoAtual - anoEmissaoRG
if(idade <= 20){
console.log(dataEmissao >= 5)  
} else if (idade <= 50){
console.log (dataEmissao >= 10)  
} else {
console.log (dataEmissao >= 15)  
}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const anoBissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 != 0
return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt(`Você tem mais de 18 anos?`)
const EnsinoMedioCompleto = prompt(`Você possui ensino médio completo?`)
const disponibilidadeHorario = prompt(`Você tem disponibilidade de horário`)
const resposta = idade.toLowerCase() === `sim` && 
EnsinoMedioCompleto.toLowerCase() === `sim` && 
disponibilidadeHorario.toLowerCase() === `sim` 
console.log(resposta)
}