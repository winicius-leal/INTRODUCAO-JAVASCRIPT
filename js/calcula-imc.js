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

    var pesoValido = validaPeso(peso); //true ou false
    var alturaValida = validaAltura(altura);//true ou false

    if(!pesoValido){ //se nao for um peso valido
        TdPeso.textContent = "Peso Invalido";
        //adiciona uma classe nova no obj 
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){//se a altura nao for valida
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

function validaPeso(peso){
    if(peso>=0 && peso <1000){
        return true;
    }else{
        return false;
    }
}


function validaAltura(altura){
    if(altura>=0 && altura <3){
        return true;
    }else{
        return false;
    }
}