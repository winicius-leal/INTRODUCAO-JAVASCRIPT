/*alterando conteudo do HTML com o DOM*/

var titulo = document.querySelector(".title");
titulo.textContent = "WM SUPLEMENTOS";


var TrPrimeiroPaciente = document.querySelector("#primary-row");

var pacientes = document.querySelectorAll(".paciente");

for(i=0; i<=pacientes.length; i++){
    
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
        TdAltura.textContent = "Altura Invalida";
    }
    if(altura <0 || altura >3){
        pesoValido = false;
        TdAltura.textContent = "Peso Invalido";
    }

    if(pesoValido && alturaValida){
        TdImc.textContent = imc.toFixed(2); //para imprimir apenas duas casas de cimais
    }else{
        TdImc.textContent = "Altura e/ou peso inválidos!";
    }
}




