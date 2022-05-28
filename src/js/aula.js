//console.log("Hello World")

let fruta = "Maça"
fruta = "Morango"

// console.log(fruta)

const ano = 2022

// console.log(ano)

// Tipos de dados

// Strings
let dataDeHoje = "25 de Maio de 2022"

// Number
let dia = 25

// Boolean = true ou false
let inverno = false
let outono = true

// Array (lista)
let novoArray = [1, "Oi", true, false, 29, "bolo"]
// console.log(novoArray[5])

novoArray.push("Refrigerante")
// console.log(novoArray)


// Objeto
// nome
// idade
// cidade

let pessoa = {
    nome: "Alisson",
    idade: 25,
    cidade: "Recife-PE"
}

pessoa.comida = "Pizza"

// console.log(pessoa)


// Operadores Logicos
/*
=== Idêntico ou Extritamente Igual => verificar se os valores são iguais e do mesmo tipo.
*/

let numeroUm = 20
let numeroDois = 20
let numeroTres = "20"
let numeroQuatro = 37

// console.log(numeroUm === numeroDois) // true
// console.log(numeroUm === numeroTres) // false

/*
== Igualdade => verificar se os valores são iguais, independente do tipo de dado.
*/

// console.log(numeroUm == numeroTres) // true
// console.log(numeroUm == numeroDois) // true

/*
!= Diferente => verificar se os valores são diferentes, independente do tipo de dado.
*/

// console.log(numeroUm != numeroDois) // false
// console.log(numeroUm != numeroQuatro) // true

/*
!== Não Idêntico => verificar se os valores e os tipos são diferentes.
*/

let numeroCinco = "29"
let numeroSeis = 32

// console.log(numeroCinco !== numeroSeis) // true

/*
< Menor que
> Maior que
<= Menor ou Igual
>= Maior ou Igual
*/

let umEhMenorQueZero = 1 < 0
// console.log(umEhMenorQueZero) // false

let doisEhMaiorQueUm = 2 > 1
// console.log(doisEhMaiorQueUm) // true

let tresEhMenorOuIgualQuatro = (3 >= 4)
// console.log(tresEhMenorOuIgualQuatro) // false

// console.log(3 <= 4) // true

// TABELA VERDAADE DO E / &&
/*
    TRUE && TRUE = TRUE
    TRUE && FALSE = FALSE
    FALSE && TRUE = FALSE
    FALSE && FALSE = FALSE
*/

// Expressão
let textoUm = "Hoje está frio"
let textoDois = "Hoje é dia 25"

// console.log(true && true) // true

// TABELA VERDADE DO OU / Operador Lógico => ||
/*
    TRUE || TRUE = TRUE
    TRUE || FALSE = TRUE
    FALSE || TRUE = TRUE
    FALSE || FALSE = FALSE
*/

let taChuvendo = false
let taQuente = true

// console.log(taChuvendo || taQuente) // true


// CONDICIONAIS (IF/ELSE)

// SE (IDADE >= 18) MAIOR IDADE
// SENÃO MENOR IDADE

// const idadeAlisson = 18

const professorLive = ""
const professoraLive = "Maria"

//SE            TRUE         OU            TRUE 
if(professorLive == "Hudson" || professoraLive == "Maria"){
    
    // console.log("Hoje tem aula!")
    // console.log("Notificar alunos por email")
//SENÃO
}else{

    // console.log("Hoje não tem aula!")
    // console.log("Não notificar alunos por email")
}


//FUNÇÕES
//NOME
//PARAMETROS
//INSTRUÇÕES
//RETORNAR OU NÃO
//CHAMAR

function verificarMaiorIdade(idade){
    //INSTRUÇÕES
    if(idade >= 18){
        return "Atingiu Maior idade"
    }else{
        return "Não atingiu maior idade"
    }

}
//CHAMADA DA FUNÇÃO
const retornoFuncao = verificarMaiorIdade(18)

// console.log(retornoFuncao)



// function login(usuario, senha){

//     if(usuario == "Alisson" && senha == "123"){
//         console.log("Sucesso Alisson")
//     }else{
//         console.log("Login invalido")
//     }
// }
// login("Alisson", 123)


//LAÇO DE REPETIÇÃO => LOOPS

// let contador = 0

// ENQUANTO
// while(contador <= 10){

//  console.log(contador)
//  contador += 1
// }

//PARA
// for(variavelControle; condiçãoParada; incremento)
// for(let contador = 0; contador <= 10; contado += 1){
//     console.log(contador)
// }



const listaCertificados = ["Alisson", "Maria", "Hudson", "João", "Pedro", "José"]

// console.log(listaCertificados[0])
for(let i = 0; i < listaCertificados.length; i++){

    console.log(listaCertificados[i])
}



///////////////////// FIM JS LIVE 03 ///////////////////////

