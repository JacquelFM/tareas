var btnSumar = document.querySelector('#sumar');
var btnRestar = document.querySelector('#restar');
var btnMultiplicar = document.querySelector('#multiplicar');
var btnDividir = document.querySelector('#dividir');
var btnResiduo = document.querySelector('#residuo');
var lblSigno = document.querySelector('#signo');

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
    lblSigno.textContent = btnSumar.textContent;
    resultado = Number(inputNumero1.value) + Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function restar() {
    lblSigno.textContent = btnRestar.textContent;
    resultado = Number(inputNumero1.value) - Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function multiplicar() {
    lblSigno.textContent = btnMultiplicar.textContent;
    resultado = Number(inputNumero1.value) * Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function dividir() {
    lblSigno.textContent = btnDividir.textContent;
    resultado = Number(inputNumero1.value) / Number(inputNumero2.value);
    inputResultado.value = resultado;
}

function residuo() {
    lblSigno.textContent = btnResiduo.textContent;
    resultado = Number(inputNumero1.value) % Number(inputNumero2.value);
    inputResultado.value = resultado;
}