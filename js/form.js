var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemDadosDoForm(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    if (erros.length > 0) {
        erros.forEach(erro => {
            exibeMensagemDeErro(mensagensErro, erro);
        });
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemDadosDoForm (form) {
    var paciente = {
        nome: form.nome.value,
        peso: peso = form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr (paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente) {
    var erros = [];

    if (paciente.nome.length <= 2) {
        erros.push("O nome é inválido");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida");
    }

    if (paciente.gordura.length == 0 || paciente.gordura < 0) {
        erros.push("Porcentagem de gordura inválida");
    }

    return erros;
}

function exibeMensagemDeErro (mensagensErro, erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    mensagensErro.appendChild(li);
}