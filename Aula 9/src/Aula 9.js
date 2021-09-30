function alterarTema() {
	var dark = document.body.classList.toggle("dark");

	if (dark) {
		document.getElementById("github").src = "https://i.ibb.co/c12VCd3/github-dark.png";
	}
	else {
		document.getElementById("github").src = "https://i.ibb.co/RpbtwHP/github-light.png";
	}
}