let palabras = guardarPalabrasPrompt();

palabras.sort((a, b) => b.localeCompare(a));

 function crearMap(array) {
    let mapaPalabras = new Map();

    array.forEach(palabra => {
        let cont = 0;
        let palabra1 = palabra;

        array.forEach(palabra2 => {
            if (palabra1 == palabra2) {
                cont++;    
            } 
        });
        mapaPalabras.set(palabra, cont);

    });

    return mapaPalabras;
} 

let mapaPalabras = crearMap(palabras);

let zonaPalabras = document.getElementById('palabras');

mapaPalabras.forEach((valor, clave) => {
    zonaPalabras.innerHTML += `${clave} ${valor} <br>`;
});

