var tocando = false;
var ligado = false;
var faixa = Number(1);
var volume = Number(0);
var btlig = window.document.getElementById("ligar");
var dtoca = window.document.getElementById("distoc");
var dvol = window.document.getElementById("disvol");
var dfx = window.document.getElementById("disfai");

function on() {
    if (ligado == true) {
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
function Play() {
    if (ligado == true) {
        tocando = true;
        dtoca.innerText = "Tocando"
    }
}

function Pause() {
    if (ligado == true) {
        tocando = false;
        dtoca.innerText = "Pausado"
    }
}

function Parar() {
    if (ligado == true) {
        tocando = false;
        faixa = 1;
        dtoca.innerText = "Parado";
    }
}

function Mais() {
    if (ligado == true && tocando == true && volume <20) {
        volume = volume + 2;
        dvol.innerHTML = volume;
    }
}

function Menos() {
    if (ligado == true && tocando && volume > 0) {
        volume = volume - 2;
        dvol.innerHTML = volume;
    }
}

function Prox() {
    if (ligado == true && faixa < 10) {
        faixa = faixa + 1;
        dfx.innerHTML = faixa;
    }
}

function Ant() {
    if (ligado == true && faixa > 0) {
        faixa = faixa - 1;
        dfx.innerHTML = faixa;
    }
}