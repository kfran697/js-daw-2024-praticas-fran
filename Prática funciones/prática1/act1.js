<<<<<<< HEAD
let palabras = [];
let palabra;

while ((palabra = prompt('Introduzca una palabra')) !== null && palabra !== '') {
    palabras.push(palabra);
}

let palabrasUnicas = [...new Set(palabras)];
palabrasUnicas.sort((a, b) => b.localeCompare(a));

let zonaPalabras = document.getElementById('palabras');
zonaPalabras.innerHTML = palabrasUnicas.join("<br>");

=======
let palabras = [];
let palabra;

while ((palabra = prompt('Introduzca una palabra')) !== null && palabra !== '') {
    palabras.push(palabra);
}

let palabrasUnicas = [...new Set(palabras)];
palabrasUnicas.sort((a, b) => b.localeCompare(a));

let zonaPalabras = document.getElementById('palabras');
zonaPalabras.innerHTML = palabrasUnicas.join("<br>");

>>>>>>> bc240b90802301bedf321657f12551b0d35da874
console.log(palabrasUnicas);