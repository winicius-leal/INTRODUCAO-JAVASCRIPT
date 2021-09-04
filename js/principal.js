/*alterando conteudo do HTML com o DOM*/

var titulo = document.querySelector(".title");
titulo.textContent = "WM SUPLEMENTOS";


var TrPrimeiroPaciente = document.querySelector("#primary-row");

var TdPeso = TrPrimeiroPaciente.querySelector(".info-peso");
var peso = TdPeso.textContent;

var TdAltura = TrPrimeiroPaciente.querySelector(".info-altura");
var altura = TdAltura.textContent;

var imc = peso / (altura * altura);

var TdImc = TrPrimeiroPaciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <0 || peso >300){
    pesoValido = false;
}
if(altura <0 || altura >3){
    pesoValido = false;
}

if(pesoValido && alturaValida){
    TdImc.textContent = imc;
}else{
    TdImc.textContent = "";
}



