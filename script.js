let display = document.getElementById('display');
let operadorActual = '';
let numeroAnterior = '';
let nuevoNumero = false;  // Para manejar si se inicia un nuevo número después de un cálculo

function agregarNumero(numero) {
    if (display.innerText === '0' || nuevoNumero) {
        display.innerText = numero;
        nuevoNumero = false;  // Para concatenar números
    } else {
        display.innerText += numero;
    }
}

function seleccionarOperacion(operador) {
    if (operadorActual !== '') {
        calcular();  // Si ya hay una operación pendiente, calcular antes de la nueva
    }
    numeroAnterior = display.innerText;
    operadorActual = operador;
    nuevoNumero = true;  // Para reiniciar el display al ingresar un nuevo número
}

function calcular() {
    const numeroActual = display.innerText;
    let resultado = 0;

    if (operadorActual === '') {
        return;  // No hacer nada si no hay operación seleccionada
    }

    switch (operadorActual) {
        case '+':
            resultado = parseFloat(numeroAnterior) + parseFloat(numeroActual);
            break;
        case '-':
            resultado = parseFloat(numeroAnterior) - parseFloat(numeroActual);
            break;
        case '*':
            resultado = parseFloat(numeroAnterior) * parseFloat(numeroActual);
            break;
        case '/':
            if (numeroActual == 0) {
                resultado = "Error";  // Manejar división por cero
            } else {
                resultado = parseFloat(numeroAnterior) / parseFloat(numeroActual);
            }
            break;
    }

    display.innerText = resultado;
    numeroAnterior = resultado;  // Guardar resultado para nuevas operaciones
    operadorActual = '';  // Resetear la operación después de calcular
    nuevoNumero = true;  // Preparar para ingresar un nuevo número después del cálculo
}

function limpiar() {
    display.innerText = '0';
    operadorActual = '';
    numeroAnterior = '';
    nuevoNumero = false;  // Resetear para iniciar desde cero
}

function borrar() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';  // Si solo queda un dígito, mostrar 0
    }
}
