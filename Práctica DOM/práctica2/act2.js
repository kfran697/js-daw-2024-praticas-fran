palabras = ["casa", "coche", "árbol", "puerta", "mesa", "silla", "ordenador", "libro", "pelota", "bicicleta"];

function ordenarPalabras () {
    if (confirm('Quiere ordenar las palabras alfabéticamente?')) {
        palabras.sort((a, b) => a.localeCompare(b));
    }
    document.getElementById('palabras').innerHTML = 'Palabras: ' + palabras;
}

setTimeout(ordenarPalabras, 7000);

document.getElementById('palabras').innerHTML = 'Palabras: ' + palabras;