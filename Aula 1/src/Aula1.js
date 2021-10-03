function Compute() {
	var strGrade = [];
	var fltGrade = [];
	var finalGrade = 0;

	strGrade[0] = document.getElementById("stGrade").value;
	strGrade[1] = document.getElementById("ndGrade").value;
	strGrade[2] = document.getElementById("rdGrade").value;

	for (var i = 0; i < strGrade.length; i++) {
		if (strGrade[i].includes(",")) {
			fltGrade[i] = parseFloat(strGrade[i].replace(",", "."));
			console.log(fltGrade);
		}
		else {
			fltGrade[i] = parseFloat(strGrade[i]);
		}
		
	}

	for (var i = 0; i < fltGrade.length; i++) {
		if (fltGrade[i] < 0 || fltGrade[i] > 10) {
			document.getElementById("resultGrade")
							.value = "Valor Inserido Inválido!";
			return;
		}
		finalGrade = finalGrade + fltGrade[i];
	}

	finalGrade /= 3;

	if (!isNaN(finalGrade)) {
		if (finalGrade >= 6) {
			document.getElementById("resultGrade")
							.value = "Você foi aprovado com média " + finalGrade.toFixed(1) + "!";
		}
		else {
			document.getElementById("resultGrade")
							.value = "Você foi reprovado com média " + finalGrade.toFixed(1) + "!";
		}
	}
	else {
		document.getElementById("resultGrade")
						.value = "Não é um número!";
	}
}