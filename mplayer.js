var tocando = false;
var ligado = false;
var faixa = Number(1);
var volume = Number(0);
var btlig = window.document.getElementById("ligar")

function on(){
 if (ligado == true){
     tocando = false;
    volume = 0;
    ligado = false;
    btlig.style.backgroundColor = 'red';
    btlig.innerText = "Desligado";
 } else {
    btlig.style.backgroundColor = 'green';
    btlig.innerText = "Ligado";
    ligado = true;

 }
}
function Play(){
    if (ligado == true){
        tocando = true;
    }
}

function Pause(){
    if(ligado == true){
        tocando = false;
    }
}

function Parar(){
    if(ligado == true){
        tocando = false;
        faixa = 1;
    }
}

function Mais(){
    if (ligado == true && tocando == true && volume <=20 ){
        volume = volume + 2;
    }
}

function Menos(){
    if (ligado == true && volume >=0){
        volume = volume - 2;
    }
}

function Prox(){
    if(ligado == true && faixa <=10){
        faixa = faixa + 1;
    }
}

function Ant(){
    if(ligado == true && faixa >=0){
        faixa = faixa - 1;
    }
}