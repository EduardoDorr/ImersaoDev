var nome = "Eduardo"
var notaPrimeiroBimestre = 9.2
var notaSegundoBimestre = 8.9
var notaTerceiroBimestre = 6.4
var notaQuartoBimestre = 4.6
var nota = [9.2, 8.9, 6.4, 4.6]

var notaFinalA = (notaPrimeiroBimestre +
                 notaSegundoBimestre +
                 notaTerceiroBimestre +
                 notaQuartoBimestre) / 4

var notaFinalB = 0
for (var i = 0; i < 4; i++)
   var notaFinalB = notaFinalB + nota[i]

notaFinalB /= 4

var notaFixadaA = notaFinalA.toFixed(1)
var notaFixadaB = notaFinalB.toFixed(1)

console.log("Bem vindo!" + nome)
console.log(notaFixadaA)
console.log(notaFixadaB)

// Revisão
// O que são variáveis, formatação de
// string, como utilizar o console.log,
// operações matemáticas e concatenação,
// uso do console
