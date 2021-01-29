var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente => {
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    if (peso <= 0 || peso >= 1000 || altura <= 0 || altura >= 3.00) {
        paciente.querySelector(".info-imc").textContent = "Peso ou altura inválido(s)";
        paciente.classList.add("paciente-invalido");
    } else {
        paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
    }
});

function calculaImc(peso, altura) {
    var imc = (peso / (Math.pow(altura, 2))).toFixed(2);
    return imc;
}

titulo.addEventListener("click", function () {
    console.log("Olá eu fui clicado");
});