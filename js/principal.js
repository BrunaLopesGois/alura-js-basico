var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var imc = peso / (Math.pow(altura, 2));

if (peso <= 0 || peso >= 1000 || altura <= 0 || altura >= 3.00) {
    paciente.querySelector(".info-imc").textContent = "Peso ou altura inválido(s)";
} else {
    paciente.querySelector(".info-imc").textContent = imc;
}