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
TdImc.textContent = imc;


