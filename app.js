//let  titulo = document.querySelector ('h1');
//titulo.innerHTML =' Jogo do Número Secreto!';

//paragrafo = document .querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let listaDeNumeroSorteados =[];
let numeroLimite = 50
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// como exibir texto na tela com boas praticas.
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

//função exibir mensagem inicial
function exibirMensagemInicial(){
    exibirTextoNaTela ('h1','Jogo do número secreto');
    exibirTextoNaTela ('p','Escolha um numero entre 1 e 50');
}
    exibirMensagemInicial();

//verificando o numero secreto e dando dicas se menor ou maior usando if e else.
    function verificarChute (){
   let chute = document.querySelector('input').value;
   if (chute == numeroSecreto){
    exibirTextoNaTela ('h1', 'Acertou!');

    //quantas tentativas descobriu o numero secreto.
    let palavraTentativa = tentativas > 1?  'tentativas' : 'tentativa'
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;

    //botão para reiniciar o jogo
   document.getElementById ('reiniciar').removeAttribute('disabled');
    exibirTextoNaTela ('p', mensagemTentativas);
   }else{
    if(chute > numeroSecreto){
        exibirTextoNaTela ('p', 'O número secreto é menor.');
    }else{
        exibirTextoNaTela('p','O numero secreto é maior.');
         // tentativas = tentativas +1
        
    }
    tentativas ++;
        limparCampo();
   }
  
}
    l

//função para gerar numero aleatorio 
function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt (Math.random()  *numeroLimite  +1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados =[];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio ();

    }else{
        listaDeNumeroSorteados.push (numeroEscolhido);
        console.log (listaDeNumeroSorteados);
     return numeroEscolhido;   
    }
       
}
 //função para limpar o campo do numero 
 
 function limparCampo (){
    chute = document.querySelector ('input');
    chute.value = '';
 }

 //função reiniciar jogo 
 function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio ();
   limparCampo();
   tentativas =1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
 }