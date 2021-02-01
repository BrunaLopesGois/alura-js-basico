var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(paciente => {
    var tdImc = paciente.querySelector(".info-imc");
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    if (!pesoValido) {
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        return;
    }
    if (!alturaValida) {
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
        return;
    }
    tdImc.textContent = calculaImc(peso, altura);
});

function calculaImc (peso, altura) {
    var imc = (peso / (Math.pow(altura, 2))).toFixed(2);
    return imc;
}

function validaPeso (peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    }
}

function validaAltura (altura) {
    if (altura > 0 && altura < 3.00) {
        return true;
    }
}