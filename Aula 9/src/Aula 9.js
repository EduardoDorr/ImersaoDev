function alterarTema() {
	var dark = document.body.classList.toggle("dark");

	if (dark) {
		document.getElementById("github").src = "https://i.ibb.co/c12VCd3/github-dark.png";
		document.getElementById("codepen").src = "https://i.ibb.co/6ZnGybJ/codepen-dark.png";
	}
	else {
		document.getElementById("github").src = "https://i.ibb.co/RpbtwHP/github-light.png";
		document.getElementById("codepen").src = "https://i.ibb.co/HCXCB04/codepen-light.png";
	}
}