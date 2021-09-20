var secretNumber = 3;

function Chutar() {
    var tryNumber = parseInt(document.getElementById("valor").value);

    console.log(tryNumber);

    if (tryNumber == secretNumber) {
        document.getElementById("resultado")
                .innerHTML = "Você acertou!";
    } else {
        document.getElementById("resultado")
                .innerHTML = "Você errou!";
    }
}