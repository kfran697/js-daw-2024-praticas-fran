function guardarPalabrasPrompt() {
    let palabras = [];
    let palabra;

    while ((palabra = prompt('Introduzca una palabra')) !== null && palabra !== '') {
        palabras.push(palabra);
    }

    return palabras;
}