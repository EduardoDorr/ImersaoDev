function Converter() {
  var inputElement = document.getElementById("valor");
  var valueDolar = parseFloat(inputElement.value);
  var valueReal = valueDolar * 5;
  
  console.log(valueReal);

  var outputElement = document.getElementById("valorConvertido");
  var valueConverted = "O resultado em real é R$" + valueReal;
  outputElement.innerHTML = valueConverted;
}

