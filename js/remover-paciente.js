var tabela = document.querySelector("table");//seletor da table inteira

tabela.addEventListener("dblclick",function(event){
    //evento alvo e adiciona no no pai que é a tr em vez da td clicada uma classe para esmaecer
    event.target.parentNode.classList.add("fadeOut");
    //espera 0.5s para exec a function de remover o alvo
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});