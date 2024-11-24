let palabras = guardarPalabrasPrompt();
let palabrasUnicas = [...new Set(palabras)];

palabrasUnicas.sort((a, b) => b.localeCompare(a));

function crearMap(array) {
    array.forEach(palabra => {
        
    });

    return mapa = new Map(array);
}

let mapaPalabras


let zonaPalabras = document.getElementById('palabras');
zonaPalabras.innerHTML = palabrasUnicas.join("<br>");
