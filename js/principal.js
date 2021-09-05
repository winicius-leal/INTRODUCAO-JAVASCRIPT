//alterando o titulo
var titulo = document.querySelector(".title");
titulo.textContent = "WM SUPLEMENTOS";

/*
    * Loop no obj da tabela para capturar os valores e calcular IMC
*/
//seletor do DOM para capturar um array de obj 
var pacientes = document.querySelectorAll(".paciente");
//loop no array
for(i=0; i < pacientes.length; i++){
    
    paciente = pacientes[i];

    var TdPeso = paciente.querySelector(".info-peso");
    var peso = TdPeso.textContent;

    var TdAltura = paciente.querySelector(".info-altura");
    var altura = TdAltura.textContent;

    var imc = peso / (altura * altura);

    var TdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <0 || peso >300){
        pesoValido = false;
        TdPeso.textContent = "Peso Invalido";
        //adiciona uma classe nova no obj 
        paciente.classList.add("paciente-invalido");
    }
    if(altura <0 || altura >3){
        alturaValida = false;
        TdAltura.textContent = "Altura Invalida";
        //adiciona uma classe nova no obj 
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        //toFIxed para imprimir apenas duas casas de cimais
        TdImc.textContent = imc.toFixed(2); 
    }else{
        TdImc.textContent = "Altura e/ou peso inválidos!";
    }
}


/*
    * Adicionar um escutador de evento no botao do formulario
*/

var buttonAdicionar = document.querySelector("#adicionar-paciente");

buttonAdicionar.addEventListener("click", function (event){
    //prevenir a ação do form e nao deixar enviar para outra rota recarregar a pagina.
    event.preventDefault(); 
    //captura o valor de cada name do form
    var formAdicionar = document.querySelector("#form-adicionar");
    var nome = formAdicionar.nome.value;
    var peso = formAdicionar.peso.value;
    var altura = formAdicionar.altura.value;
    var gordura = formAdicionar.gordura.value;
    //cria um elemento tr
    var pacienteTr = document.createElement("tr");
    //cria varios elementos td
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //adicionao valor nos elementos td
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //cria um elementos filhos td na tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //busca o obj da tabela 
    var tabela = document.querySelector("#tabela-pacientes");
    //cria um elemnto filho na tabela com os dados criados
    tabela.appendChild(pacienteTr);
   

});





