var tocando = false;
var ligado = false;
var faixa = Number(1);
var volume = Number(0);

function on() {
    if (ligado)  {
        tocando = false;
        volume = 0;
        ligado = false;
        $("#ligar").css("backgroundColor",'red');
        $("#ligar").html("Desligado");
        $("#dtoc").html("");
        $("#dvol").html("");
        $("#dfx").html("");
    } else {
        $("#ligar").css("backgroundColor",'green');
        $("#ligar").html("Ligado");
        ligado = true;

    }
}
function Play() {
    if (ligado) {
        tocando = true;
        $("#dtoc").html("Tocando");
    }
}

function Pause() {
    if (ligado) {
        tocando = false;
        $("#dtoc").html("Pausado");
    }
}

function Parar() {
    if (ligado) {
        tocando = false;
        faixa = 1;
        $("#dfx").html(1);
        $("#dtoc").html("Parado");
    }
}

function Mais() {
    if (ligado && volume <20) {
        volume = volume + 2;
        $("#dvol").html(volume);
    }
}

function Menos() {
    if (ligado && volume > 0) {
        volume = volume - 2;
        $("#dvol").html(volume);
    }
}

function Prox() {
    if (ligado && faixa < 10 ) {
        faixa = faixa + 1;
        $("#dfx").html(faixa);
    }
}

function Ant() {
    if (ligado  && faixa > 0 ) {
        faixa = faixa - 1;
        $("#dfx").html(faixa);
    }
}