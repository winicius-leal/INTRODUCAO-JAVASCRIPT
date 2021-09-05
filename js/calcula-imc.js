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

    var imc = calculaImc(peso,altura);

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
        TdImc.textContent = imc; 
    }else{
        TdImc.textContent = "Altura e/ou peso inválidos!";
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    //toFIxed para imprimir apenas duas casas de cimais
    return imc.toFixed(2);
}