// Función callback para multiplicar x2
const array = [1,2,3,4];

function filtro (array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

function multiplicarX2 (x) {
    return x * 2;
}

let multiplicacion = filtro(array, multiplicarX2);

console.log(multiplicacion);

// Función callback para pasar de minúsculas a mayúsculas
const minúsculas = ['hola','adios','hello','bye'];

function filtro (array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

function toMayus (palabra) {
    return palabra.toUpperCase();
}

let mayúsculas = filtro(minúsculas, toMayus);

console.log(mayúsculas);

// Función callback para saber el factorial
const numeros = [1,5,3,10];

function filtro (array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

function factorial (numero) {
    if (numero <= 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

let factoriales = filtro(numeros, factorial);

console.log(factoriales);