var numeros = [];

function limpar() {
    var resultado = document.getElementById('result');
    resultado.innerHTML = '';
}

function retornaResultadoAtual() {
    return document.getElementById('result').innerText;
}

function clicaZero() {
    var atualizaComZero = retornaResultadoAtual() + '0';
    document.getElementById('result').innerText = atualizaComZero;
}

function clicaUm() {
    var atualizaComUm = retornaResultadoAtual() + '1';
    document.getElementById('result').innerText = atualizaComUm;
}

function clicaDois() {
    var atualizaComDois = retornaResultadoAtual() + '2';
    document.getElementById('result').innerText = atualizaComDois;
}

function clicaTres() {
    var atualizaComTres = retornaResultadoAtual() + '3';
    document.getElementById('result').innerText = atualizaComTres;
}

function clicaQuatro() {
    var atualizaComQuatro = retornaResultadoAtual() + '4';
    document.getElementById('result').innerText = atualizaComQuatro;
}

function clicaCinco() {
    var atualizaComCinco = retornaResultadoAtual() + '5';
    document.getElementById('result').innerText = atualizaComCinco;
}

function clicaSeis() {
    var atualizaComSeis = retornaResultadoAtual() + '6';
    document.getElementById('result').innerText = atualizaComSeis;
}

function clicaSete() {
    var atualizaComSete = retornaResultadoAtual() + '7';
    document.getElementById('result').innerText = atualizaComSete;
}

function clicaOito() {
    var atualizaComOito = retornaResultadoAtual() + '8';
    document.getElementById('result').innerText = atualizaComOito;
}

function clicaNove() {
    var atualizaComNove = retornaResultadoAtual() + '9';
    document.getElementById('result').innerText = atualizaComNove;
}

function clicaPonto() {
    var atualizaComPonto = retornaResultadoAtual() + '.';
    document.getElementById('result').innerText = atualizaComPonto;
}

function clicaSoma() {
    var numero = parseInt(document.getElementById('result').innerText,10);
    console.log("numero: " + numero);
    numeros.push(numero);
    console.log(numeros);
}
  