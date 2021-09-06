
/*
    * Adicionar um escutador de evento no botao do formulario
*/
var buttonAdicionar = document.querySelector("#adicionar-paciente");

buttonAdicionar.addEventListener("click", function (event){
    //prevenir a ação do form e nao deixar enviar para outra rota recarregar a pagina.
    event.preventDefault(); 

    //captura o obj form
    var form = document.querySelector("#form-adicionar");

    //chama a function para obter os dados e criar um obj paciente
    var paciente = obtemPacienteDoFormulario(form);

    //se o peso for invalido para a execução da function
    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    }

    var pacienteTr = montaTr(paciente);
    
    //busca o obj da tabela 
    var tabela = document.querySelector("#tabela-pacientes");

    //cria um elemnto filho na tabela com os dados criados
    tabela.appendChild(pacienteTr);

    //limpa os campos do form
    form.reset(); 
   

});

function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)   
    }

    return paciente;
}


function montaTr(paciente){

    //cria um elemento tr
    var pacienteTr = document.createElement("tr");

    //cria uma classe nova para o elemento
    pacienteTr.classList.add("paciente");
    
    //montar td como filho da tr
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(value, classe){

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = value;

    return td;
}

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}