var tocando = false;
var ligado = false;
var faixa = Number(1);
var volume = Number(0);
var btlig = window.document.getElementById("ligar");
var dtoca = window.document.getElementById("distoc");
var dvol = window.document.getElementById("disvol");
var dfx = window.document.getElementById("disfai");


function on() {
    if (ligado)  {
        tocando = false;
        volume = 0;
        ligado = false;
        btlig.style.backgroundColor = 'red';
        btlig.innerText = "Desligado";
        dtoca.innerHTML = " ";
        dvol.innerHTML = " ";
        dfx.innerHTML = " ";
    } else {
        btlig.style.backgroundColor = 'green';
        btlig.innerText = "Ligado";
        ligado = true;

    }
}
function Play() {
    if (ligado) {
        tocando = true;
        dtoca.innerText = "Tocando"
    }
}

function Pause() {
    if (ligado) {
        tocando = false;
        dtoca.innerText = "Pausado"
    }
}

function Parar() {
    if (ligado) {
        tocando = false;
        faixa = 1;
        dfx.innerHTML = 1;
        dtoca.innerText = "Parado";
    }
}

function Mais() {
    if (ligado && volume <20) {
        volume = volume + 2;
        dvol.innerHTML = volume;
    }
}

function Menos() {
    if (ligado && volume > 0) {
        volume = volume - 2;
        dvol.innerHTML = volume;
    }
}

function Prox() {
    if (ligado && faixa < 10 ) {
        faixa = faixa + 1;
        dfx.innerHTML = faixa;
    }
}

function Ant() {
    if (ligado  && faixa > 0 ) {
        faixa = faixa - 1;
        dfx.innerHTML = faixa;
    }
}