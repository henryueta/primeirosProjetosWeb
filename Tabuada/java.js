let min = 1;
let max = 10;
let valor1;
let valor2;
let respostaUsuario;
let respostaCorreta;
let acertos = 0;
let erros = 0;

const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const campoRespostaUsuario = document.querySelector('#campoRespostaUsuario');
const campoAcertos = document.querySelector('#campoAcertos');
const campoErros = document.querySelector('#campoErros');

function iniciar(){
    valor1 = Math.floor(Math.random() * (max - min + 1)) + min;
    valor2 = Math.floor(Math.random() * (max - min + 1)) + min;
    numero1.value = valor1;
    numero2.value = valor2;
    campoRespostaUsuario.focus();
}

document.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
        respostaCorreta = valor1 * valor2;
        respostaUsuario = campoRespostaUsuario.value;
        if(respostaCorreta == respostaUsuario){
            acertos++;
            console.log(acertos);
        }else{
            erros++;
            console.log(erros);
        }
        campoAcertos.innerHTML = "Acertos:"+acertos;
        campoRespostaUsuario.value = "";
        iniciar();
            campoErros.innerHTML = "Erros:"+erros;
            campoRespostaUsuario.value = "";
            iniciar();
    }

});

iniciar();