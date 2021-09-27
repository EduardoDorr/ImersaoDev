var secretNumber = parseInt(Math.random() * 11);
var attempts = 0;

function Chutar() {
    var tryNumber = parseInt(document.getElementById("valor").value);

    if (attempts < 3) {
        if (tryNumber < 0 || tryNumber > 10) {
            document.getElementById("resultado")
                    .innerHTML = "Valor inserido inválido!";
    
            return;
        }
    
        if (tryNumber == secretNumber) {
            document.getElementById("resultado")
                    .innerHTML = "Você acertou!";
        }
        else {
            if (tryNumber > secretNumber) {
                document.getElementById("resultado")
                        .innerHTML = "Você errou! O número é menor!";
            } else {
                document.getElementById("resultado")
                        .innerHTML = "Você errou! O número é maior!";
            }
    
            attempts++;
        }
    }
    if (attempts == 3) {
        document.getElementById("resultado")
                .innerHTML = "Número de tentativas esgotadas! O número secreto era " + secretNumber + "!";
    }
}
