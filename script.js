


function avaliacao (nota){

    let botaoSelecionado = document.querySelector(".btn-selection");

   if(botaoSelecionado !== null){
    botaoSelecionado.classList.remove("btn-selection");
   }

   nota.classList.add("btn-selection");

   let notaFinal = nota.innerHTML;

    let mensagem = document.querySelector(".selection");
    mensagem.innerHTML = `You selected ${notaFinal} of 5`
}

function enviar (){

    let containerPadrao = document.querySelector(".container");
    containerPadrao.classList.add("escondido");

    let novoConteudo = document.querySelector(".container-pos");
    novoConteudo.classList.remove("escondido");
}