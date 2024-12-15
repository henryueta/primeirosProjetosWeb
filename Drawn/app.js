let timer;
let segundos = 100;
let cent = 0;
let gamemode = "Edit Mode";
const start = document.querySelector('#start');
const fundo = document.querySelectorAll("#fundo div");
const muda2 = document.querySelector("#fundo");
const muda= document.querySelectorAll("#muda");
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
const pincel= document.querySelector("#pincel");
const nuvem=document.querySelector("#nuvem");
const tenso= document.querySelector("#tenso");
const acabou = document.querySelector("#acabou");
const quit = document.querySelector("#quit");
const reset = document.querySelector("#reset");
const myTimeout = setTimeout(comeco , 1500);
const myTimeout2 = setTimeout(bora , 2000);


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
    
    if(segundos === 0){
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

function game(){
    document.getElementById("intangivel").style.display = "none";
    document.getElementById("perai").style.display = "none";
tempolim();
}



function stop2(){
    clearInterval(timer);
}

function pause(){
    document.getElementById("intangivel").style.display = "flex";
    document.getElementById("perai").style.display = "flex";
    stop2();
}

fundo.forEach(fundo =>{
    fundo.addEventListener('click',()=>{
       lista = fundo.classList;
if(lista == ''){
    fundo.classList.add("muda2");
}
else { 
fundo.classList.remove("muda2");
fundo.classList.add("teste");
}



});
});


fundo.forEach(fundo =>{
    fundo.addEventListener('click',()=>{
       lista = fundo.classList;
if(lista == 'muda2'){
    fundo.classList.remove("teste");
}
else { 
   
}
});
});



// function paint(){
// document.getElementById("cores").style.display = "flex";
// document.getElementById("botoes").style.display = "none";
// }

// function colored(){
    // document.getElementById("cores").style.display = "none";
    // document.getElementById("botoes").style.display = "flex";
// }


// BOTOES

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

//PINCEL

pincel.addEventListener("click", ()=>{
    gamemode= "Edit Pincel";
    descricao.innerHTML = gamemode;
    document.getElementsById("muda").style.width= "25px";
    document.getElementsById("muda").style.height= "25px";
     }
 )


// EDITAR/VISUALIZAR
edit.addEventListener("click", ()=>{
   gamemode= "View Mode";
   descricao.innerHTML = gamemode;
   document.getElementById("fundo").style.pointerEvents= "none";
   document.getElementById("edit").style.display= "none";
   document.getElementById("edit2").style.display= "flex";

    }
)
edit2.addEventListener("click", ()=>{
    gamemode= "Edit Mode";
   descricao.innerHTML = gamemode;
    document.getElementById("fundo").style.pointerEvents= "visible";
    document.getElementById("edit").style.display= "flex";
    document.getElementById("edit2").style.display= "none";
     }
 )


// TAMANHO
sizer.addEventListener("click", ()=>{
    gamemode= "Sizer Edit";
    descricao.innerHTML = gamemode;
    document.getElementById("botoes").style.display = "none";
    document.getElementById('tamanhos').style.display="flex";
})
sizer2.addEventListener("click", ()=>{
    gamemode= "Select";
    descricao.innerHTML = gamemode;
    document.getElementById("botoes").style.display = "flex";
    document.getElementById('tamanhos').style.display="none";
})
largura.addEventListener("click", ()=>{
    lista = largura.classList;
    if(lista == ''){
    gamemode= "Width Edit";
    descricao.innerHTML = gamemode;
    largura.classList.add("selecionado");
    document.getElementById("bordinha").style.width = "1110px";
    document.getElementById("fundo").style.width = "1100px";
    document.getElementById("fundo").style.height = "625px";
    document.getElementById("fundo").style.padding = "6px";
    }
    else{
        document.getElementById("bordinha").style.width = "1000px";
        largura.classList.remove("selecionado");
        document.getElementById("fundo").style.width = "750px";
    document.getElementById("fundo").style.height = "655px";
    document.getElementById("fundo").style.padding = "5px";
    }
})
altura.addEventListener("click", ()=>{
    lista = altura.classList;
    if(lista == ''){
        gamemode= "Height Edit";
        descricao.innerHTML = gamemode;
    altura.classList.add("selecionado");
    document.getElementById("fundo").style.width = "750px";
    document.getElementById("fundo").style.height = "725px";
    document.getElementById("fundo").style.padding = "6px";
    }
    else{
        
        altura.classList.remove("selecionado");
        document.getElementById("fundo").style.width = "750px";
    document.getElementById("fundo").style.height = "655px";
    document.getElementById("fundo").style.padding = "5px";
    }
})



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
})