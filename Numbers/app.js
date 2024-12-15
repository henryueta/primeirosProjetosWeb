let timer;
let segundos = 100;
let decision = 0;
let cent = 0;
let andar = 0;
let choice = 0;
let choice2 =0;
let choice3 =0;
let multi = 0;
let real=0;
let points = 0;
let carregar = 0;
let respostaOne = "";
let respostaTwo = "";
let respostaThree = "";
let respostaFour = "";
let coins="";


// CODIGOS DE PROCURA
let cod1 = 0;
let cod2 = 0;
let cod3 = 0;
let cod4 = 0;
let cod5 = 0;
let cod6 = 0;

let A34 = 0;
let B56 = 0;
let C95 = 0;
let F09 = 0;
let P02 = 0;
let K77 = 0;


const start = document.querySelector('#start');
const fundo = document.querySelector("#fundo");
const muda2 = document.querySelector("#fundo");
const muda= document.querySelectorAll("#muda");
const muda3= document.querySelectorAll(".muda3");
const cronor=document.querySelector("#cronor");
const reiniciar=document.querySelector("#reiniciar");
const letras=document.querySelector("#letras");
const  tinta= document.querySelector("#tinta");
const  tinta2= document.querySelector("#tinta2");
const wait=document.querySelector('#wait');
const sizer=document.querySelector('#sizer');
const sizer2=document.querySelector('#sizer2');
const largura=document.querySelector('#largura');
const altura=document.querySelector('#altura');
const edit=document.querySelector('#edit');
const edit2=document.querySelector("#edit2");
const descricao=document.querySelector("#descricao");
const nuvem=document.querySelector("#nuvem");
const tenso= document.querySelector("#tenso");
const acabou = document.querySelector("#acabou");
const quit = document.querySelector("#quit");
const reset = document.querySelector("#reset");
const visor1 = document.querySelector("#visor1");
const visor2 = document.querySelector("#visor2");
const visor3 = document.querySelector("#visor3");
const visor4 = document.querySelector("#visor4");
const baixo= document.querySelector("#baixo");
const baixo2= document.querySelector("#baixo2");
const baixo3= document.querySelector("#baixo3");
const ligar= document.querySelector("#ligar");
const pontos= document.querySelector("#pontos");
const resposta1= document.querySelector("#resposta1");
const resposta2= document.querySelector("#resposta2");
const resposta3= document.querySelector("#resposta3");
const resposta4= document.querySelector("#resposta4");
const positive= document.querySelector("#positive");
const positive2= document.querySelector("#positive2");
const positive3= document.querySelector("#positive3");
const positive4= document.querySelector("#positive4");
const accept= document.querySelector("#accept");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const l4 = document.querySelector("#l4");
const l5 = document.querySelector("#l5");
const l6 = document.querySelector("#l6");
const l7 = document.querySelector("#l7");
const l8 = document.querySelector("#l8");
const l9 = document.querySelector("#l9");
const retorno = document.querySelector("#retorno");
const seguro = document.querySelector("#seguro");
const brilho = document.querySelector("#brilho");
const religar = document.querySelector("#religar");
const bd = document.querySelector("#bd");
const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const s3 = document.querySelector("#s3");
const s4 = document.querySelector("#s4");
const s5 = document.querySelector("#s5");
const s6 = document.querySelector("#s6");
const vida=document.querySelector("#vida");
const moedas=document.querySelector("#moedas");
const myTimeout = setTimeout(comeco , 1500);
const myTimeout2 = setTimeout(bora , 2000);
const uso = setTimeout(duracaoVida , 900);




document.onkeydown=function(e){
    if(e.key === 'Escape'){
        pause();
    }


}

function comeco(){
    document.getElementById("acabou").innerHTML = "Start!"
    document.getElementById("acabou").style.display="flex"
    document.getElementById("intangivel").style.display="flex"
}

function bora(){
    document.getElementById("acabou").style.display="none"
    document.getElementById("intangivel").style.display="none"
    document.getElementById("nuvem").style.display="inline-block"
    game();
    
}

// BATERIA

function duracaoVida(){

function setenta(){
    vida.innerHTML="|||";
}
function cinquenta(){
    vida.innerHTML="||";
}
function vinte(){
    vida.innerHTML="|";
    apagao();
}
function zero(){
    vida.innerHTML="";
desligando();
}

const limite = setTimeout(setenta, 25000);
const limite2 = setTimeout(cinquenta, 40000);
const limite3 = setTimeout(vinte, 55000);
const limite4 = setTimeout(zero, 70000);

}


function red(){
    document.getElementById("fundo").style.backgroundColor="red";
}

function encounter(){
    document.getElementById("acabou").style.display="flex"
        document.getElementById("acabou").innerHTML = "GAME OVER!"
        document.getElementById("intangivel").style.display="flex"
        document.getElementById("quit").style.display="flex"
}

function tempolim(){
    cronor.disabled = true;
    timer = setInterval(()=>{
    letras.innerHTML = segundos;
    segundos--;

    if(segundos == 15){
        document.getElementById("letras").style.webkitTextStrokeColor = "red";
        document.getElementById("tenso").style.display="inline-block";
        document.getElementById("nuvem").style.display="none";
        document.getElementById("letras").style.color = "red";
        document.getElementById("letras").style.textShadow= "red 0px 0px 10px";
    }
    
    if(segundos < 0){
        document.getElementById("acabou").style.display="flex"
        document.getElementById("acabou").innerHTML = "The time is Over!"
        document.getElementById("intangivel").style.display="flex"
        document.getElementById("quit").style.display="flex"
    stop();
    }
    }, 1010);
    
    function stop(){
        clearInterval(timer);
        cronor.disabled = false;
    }
    }

    function rodada(){
procurar();
tempolim();
        cent = Math.floor(Math.random() *(50 - 100))+1;
        document.getElementById("visor1").innerHTML = cent;
        real = Math.floor(Math.random() *(90 - 1))+1;
        document.getElementById("visor2").innerHTML = real;
        multi = Math.floor(Math.random() *(10 - 1))+1;
        document.getElementById("multiplicador").innerHTML = "x" +multi;
        multiplicador.value = multi;
        
        
    }
    
  function procurar(){
    cod1 = Math.floor(Math.random() *(100 - 1));

    cod2 = Math.floor(Math.random() *(100 - 1));

    cod3 = Math.floor(Math.random() *(100 - 1));

    cod4 = Math.floor(Math.random() *(100 - 1));

    cod5 = Math.floor(Math.random() *(100 - 1));

    cod6 = Math.floor(Math.random() *(100 - 1));

decision = Math.floor(Math.random() *(6 - 1))+1;

if(decision == 1){
    document.getElementById("visor3").innerHTML = "A34";
    document.getElementById("visor4").innerHTML = "K77";

    choice3=cod1;
    choice4=cod6;
}
if(decision == 2){
    document.getElementById("visor3").innerHTML ="B56";
    document.getElementById("visor4").innerHTML = "P02";

    choice3=cod2;
    choice4=cod5;
}
if(decision == 3){
    document.getElementById("visor3").innerHTML = "C95";
    document.getElementById("visor4").innerHTML = "F09";

    choice3=cod3;
    choice4=cod4;
}
if(decision == 4){
    document.getElementById("visor3").innerHTML = "F09";
    document.getElementById("visor4").innerHTML = "C95";

    choice3=cod4;
    choice4=cod3;
}
if(decision == 5){
    document.getElementById("visor3").innerHTML = "P02";
    document.getElementById("visor4").innerHTML ="B56";

    choice3=cod5;
    choice4=cod2;
}
if(decision == 6){
    document.getElementById("visor3").innerHTML = "K77";
    document.getElementById("visor4").innerHTML = "A34";

    choice3=cod6;
    choice4=cod1;
}
}

// EDITAR/VISUALIZAR
edit.addEventListener("click", ()=>{
 A34 = cod1;
 document.getElementById("s1").innerHTML = A34;
 B56 = cod2;
 document.getElementById("s2").innerHTML = B56;
 C95 = cod3;
 document.getElementById("s3").innerHTML = C95;
 F09 = cod4;
document.getElementById("s4").innerHTML = F09;
 P02 = cod5;
 document.getElementById("s5").innerHTML = P02;
 K77 = cod6; 
 document.getElementById("s6").innerHTML = K77;
 document.getElementById("edit2").style.display = "flex";
 document.getElementById("edit").style.display = "none";
});

edit2.addEventListener("click", ()=>{

    document.getElementById("s1").innerHTML = "A34";

    document.getElementById("s2").innerHTML = "B56";

    document.getElementById("s3").innerHTML = "C95";

    document.getElementById("s4").innerHTML = "F09";

    document.getElementById("s5").innerHTML = "P02";

    document.getElementById("s6").innerHTML = "K77";

    document.getElementById("edit").style.display = "flex";
    document.getElementById("edit2").style.display = "none";
     
});


function game(){
    document.getElementById("intangivel").style.display = "none";
    document.getElementById("perai").style.display = "none";
    rodada();
}





function stop2(){
    clearInterval(timer);
}

function pause(){
    document.getElementById("intangivel").style.display = "flex";
    document.getElementById("perai").style.display = "flex";
    stop2();
}






// function paint(){
// document.getElementById("cores").style.display = "flex";
// document.getElementById("botoes").style.display = "none";
// }

// function colored(){
    // document.getElementById("cores").style.display = "none";
    // document.getElementById("botoes").style.display = "flex";
// }


positive.addEventListener("click", ()=>{ 
    choice = cent * multi;
        respostaOne = resposta1.value;
        if(respostaOne == choice){  
            points= points + 10;
            document.getElementById("positive").style.display="none";
            resposta1.value= "TRUE"; 
            winner();
coins++;
    }   else{
        document.getElementById("resposta1").style.color="red";
        resposta1.value= "x";
        document.getElementById("visor1").style.color="red";
        coins--;
        loser();

    }
    pontos.innerHTML= points;
     

});

positive2.addEventListener("click", ()=>{ 

    choice2 = real * multi;
        respostaTwo = resposta2.value;
        if(respostaTwo == choice2){  
            points=points + 10;     
            document.getElementById("positive2").style.display="none";
            resposta2.value= "TRUE";  
            coins++;
            winner();

        } else{
            document.getElementById("resposta2").style.color="red";
            resposta2.value= "x";
            document.getElementById("visor2").style.color="red";
            coins--;
            loser();

        }
        pontos.innerHTML= points;
});

positive3.addEventListener("click", ()=>{ 
        respostaThree = resposta3.value;
        if(respostaThree == choice3){  
            points=points + 10;
            document.getElementById("positive3").style.display="none";
            resposta3.value= "TRUE";    
            coins++;
            winner();
        }

        else{
            document.getElementById("resposta3").style.color="red";
            resposta3.value= "x";
            document.getElementById("visor3").style.color="red";
            coins--;
            loser();
        }
        pontos.innerHTML= points;

});

positive4.addEventListener("click", ()=>{ 
    respostaFour = resposta4.value;
    if(respostaFour == choice4){  
        points=points + 10;
        document.getElementById("positive4").style.display="none";
        resposta4.value= "TRUE";    
        coins++;
        winner();

    }

    else{
        document.getElementById("resposta4").style.color="red";
        resposta4.value= "x";
        document.getElementById("visor4").style.color="red";
        coins--;
loser();

    }
    pontos.innerHTML= points;

});

function again(){
    window.location.reload()
}

function winner(){
if(coins==4){
    stop2();
    document.getElementById("desafio").style.display="none";
    document.getElementById("vencedor").style.display="flex";
    const lopp = setTimeout(again, 3500);
}
}

function loser(){
    if(coins==-4){
        stop2();
        document.getElementById("desafio").style.display="none";
        document.getElementById("vencedor").style.display="flex";
        vencedor.innerHTML="LOSER LOL"
        const lopp = setTimeout(again, 3500);
    }
    }

function bota(){
document.getElementById("titulo").style.color="greenyellow";

}

function iniciar(){
document.getElementById("titulo").style.display="none";
document.getElementById("ala1").style.display="flex";
}

ligar.addEventListener("click", ()=>{ 
    lista = ligar.classList;
if(lista == ""){
ligar.classList.add("selecionado");
document.getElementById("titulo").style.display="flex";
const botando = setTimeout(bota,1500);
const iniciando = setTimeout(iniciar,6000);
}
else{
    document.getElementById("ala1").style.display="none";
    document.getElementById("ala2").style.display="none";
    document.getElementById("ala3").style.display="none";
    document.getElementById("Main").style.display="none";  
    document.getElementById("retorno").style.display="none"; 
    ligar.classList.remove("selecionado");
}

});

baixo.addEventListener("click", ()=>{
    lista = baixo.classList;
    if(lista == ""){
        if(andar == 1 ){
    baixo.classList.add("muro");
    document.getElementById("ala2").style.display="none";
    document.getElementById("ala3").style.display="flex";
}}  else{
    if(andar == 1 ){
    baixo.classList.remove("muro");
    document.getElementById("ala2").style.display="flex";
    document.getElementById("ala3").style.display="none";
    }
}

});

religar.addEventListener("click",()=>{
    window.location.reload()
});
l1.addEventListener("click",()=>{
    lista = l1.classList;
    document.getElementById("retorno").style.display="flex";
document.getElementById("ala1").style.display="none";
document.getElementById("Main").style.display="flex";
});

retorno.addEventListener("click",()=>{
    document.getElementById("retorno").style.display="none";
document.getElementById("ala1").style.display="flex";
document.getElementById("Main").style.display="none";
document.getElementById("ala2").style.display="none";
document.getElementById("ala3").style.display="none";
andar=0;
});

function apagao(){
    document.getElementById("pontos").style.color="rgb(45, 64, 17)";
    document.getElementById("letras").style.color="rgb(45, 64, 17)";
    document.getElementById("desafio").style.color="rgb(45, 64, 17)";
    document.getElementById("resposta1").style.color="rgb(45, 64, 17)";
    document.getElementById("resposta2").style.color="rgb(45, 64, 17)";
    document.getElementById("resposta3").style.color="rgb(45, 64, 17)";
    document.getElementById("resposta4").style.color="rgb(45, 64, 17)";
    document.getElementById("bd").style.color="rgb(45, 64, 17)";
    document.getElementById("multiplicador").style.color="rgb(45, 64, 17)";
    document.getElementById("vencedor").style.color="rgb(45, 64, 17)";

}

function desligando(){
    document.getElementById("pontos").style.display="none";
    document.getElementById("letras").style.display="none";
    document.getElementById("desafio").style.display="none";
    document.getElementById("resposta1").style.color="black";
    document.getElementById("resposta2").style.color="black";
    document.getElementById("resposta3").style.color="black";
    document.getElementById("resposta4").style.color="black";
    document.getElementById("ala1").style.display="none";
    document.getElementById("multiplicador").style.display="none";
    document.getElementById("intangivel").style.display="flex";

}


brilho.addEventListener("click",()=>{
    lista = brilho.classList;
if(lista == ""){
    brilho.innerHTML="▶Brighttness -";
    brilho.classList.add("luz");
    apagao();
}
else{
    brilho.innerHTML="▶Brighttness +";
    brilho.classList.remove("luz");
    document.getElementById("pontos").style.color="greenyellow";
    document.getElementById("letras").style.color="greenyellow";
    document.getElementById("desafio").style.color="greenyellow";
    document.getElementById("resposta1").style.color="greenyellow";
    document.getElementById("resposta2").style.color="greenyellow";
    document.getElementById("resposta3").style.color="greenyellow";
    document.getElementById("resposta4").style.color="greenyellow";
    document.getElementById("bd").style.color="greenyellow";
    document.getElementById("multiplicador").style.color="greenyellow";
    document.getElementById("vencedor").style.color="greenyellow";

}
});


l2.addEventListener("click",()=>{
    document.getElementById("retorno").style.display="flex";
document.getElementById("ala1").style.display="none";
document.getElementById("ala2").style.display="flex";
andar=1;
});

l3.addEventListener("click",()=>{
    document.getElementById("retorno").style.display="flex";
document.getElementById("ala1").style.display="none";
document.getElementById("ala3").style.display="flex";
andar=2;
});


// LOSE

quit.addEventListener("click", ()=>{
    window.location.reload()
});
reset.addEventListener("click", ()=>{
    window.location.reload()
});


// PAUSE
wait.addEventListener("click", ()=>{
    pause();
});
start.addEventListener("click", ()=>{
    game();
});

cronor.addEventListener("click", ()=>{
    tempolim();
});

reiniciar.addEventListener("click", ()=>{
    stop();
    segundos= 100;
    letras.innerHTML = segundos;
});













// FUNDO TINTA
tinta.addEventListener("click", ()=>{
    gamemode= "Color";
    descricao.innerHTML = gamemode;
    document.getElementById("cores").style.display = "flex";
    document.getElementById("botoes").style.display = "none";
});
tinta2.addEventListener("click", ()=>{
    gamemode= "Select";
    descricao.innerHTML = gamemode;
    document.getElementById("cores").style.display = "none";
    document.getElementById("botoes").style.display = "flex";
});




// CORES DE FUNDO
azul.addEventListener("click", ()=>{
    gamemode= "Blue";
    descricao.innerHTML = gamemode;
    muda2.classList.toggle("teste2");
})

vermelho.addEventListener("click", ()=>{
    gamemode= "Red";
    descricao.innerHTML = gamemode;
    muda2.classList.toggle("teste3");
})

verde.addEventListener("click", ()=>{
    gamemode= "Green";
    descricao.innerHTML = gamemode;
    muda2.classList.toggle("teste4");
});