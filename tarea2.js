var btnSumar = document.querySelector('#sumar');
var btnRestar = document.querySelector('#restar');
var btnMultiplicar = document.querySelector('#multiplicar');
var btnDividir = document.querySelector('#dividir');
var btnResiduo = document.querySelector('#residuo');

var inputNumero1 = document.querySelector('#numero1');
var inputNumero2 = document.querySelector('#numero2');
var inputResultado = document.querySelector('#resultado');
var resultado;

btnSumar.addEventListener('click', sumar);
btnRestar.addEventListener('click', restar);
btnMultiplicar.addEventListener('click', multiplicar);
btnDividir.addEventListener('click', dividir);
btnResiduo.addEventListener('click', residuo);

function sumar() {
    resultado = Number(inputNumero1.value) + Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function restar() {
    resultado = Number(inputNumero1.value) - Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function multiplicar() {
    resultado = Number(inputNumero1.value) * Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function dividir() {
    resultado = Number(inputNumero1.value) / Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function residuo() {
    resultado = Number(inputNumero1.value) % Number(inputNumero2.value);
    inputResultado.value = resultado;
}