
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
    imcTd.textContent = calculaImc(peso, altura);
    //cria um elementos filhos td na tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    //busca o obj da tabela 
    var tabela = document.querySelector("#tabela-pacientes");
    //cria um elemnto filho na tabela com os dados criados
    tabela.appendChild(pacienteTr);
   

});