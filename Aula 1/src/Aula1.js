/* Código Inicial
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
console.log(notaFixadaB) */

function Compute() {
   var grade = [0, 0, 0, 0];
   var finalGrade = 0;

   grade[0] = parseFloat(document
               .getElementById("stGrade")
               .value);
   grade[1] = parseFloat(document
               .getElementById("ndGrade")
               .value);
   grade[2] = parseFloat(document
               .getElementById("rdGrade")
               .value);
   grade[3] = parseFloat(document
               .getElementById("thGrade")
               .value);
   
   for (var i = 0; i < 4; i++) {
      if (grade[i] < 0 || grade[i] > 10) {
         document.getElementById("finalGrade")
                 .value = "";
         document.getElementById("resultGrade")
                 .innerHTML = "Valor Inserido Inválido!";
         return;
      }

      finalGrade = finalGrade + grade[i];
   }

   finalGrade /= 4

   console.log(finalGrade.toFixed(1));

   if (!isNaN(finalGrade)) {
         
      document.getElementById("finalGrade")
         .value = finalGrade.toFixed(1);

      if (finalGrade >= 6) {
         document.getElementById("resultGrade")
                 .innerHTML = "Você foi Aprovado!!";
      }
      else{
         document.getElementById("resultGrade")
                 .innerHTML = "Você foi Reprovado!!";
      }
   }
}

function Convert() {
   var degreeCelsius = parseFloat(document
                        .getElementById("gCelsius")
                        .value);
   
   if (!isNaN(degreeCelsius)) {
      var degreeFahrenheit = (degreeCelsius * (9 / 5)) + 32;
      document.getElementById("gFahrenheit")
              .value = degreeFahrenheit.toFixed(2);
      console.log(degreeFahrenheit);
   
      var Kelvin = (degreeCelsius + 273.15);
      document.getElementById("kelvin")
              .value = Kelvin.toFixed(2);
      console.log(Kelvin);

      var degreeRankine = (degreeCelsius * (9 / 5)) + 491.67;
      document.getElementById("gRankine")
              .value = degreeRankine.toFixed(2);
      console.log(degreeRankine);
   }
   
   // (0 °C × 9/5) + 32 to °F
   // 0 °C × 9/5 + 491,67 to °R
   // 0 °C + 273,15 to K
}

// Revisão
// O que são variáveis, formatação de
// string, como utilizar o console.log,
// operações matemáticas e concatenação,
// uso do console
