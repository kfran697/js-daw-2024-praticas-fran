let palabras = guardarPalabrasPrompt();

palabras.sort((a, b) => b.localeCompare(a));

let mapaPalabras = new Map();

 function crearMap(array) {
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

mapaPalabras = crearMap(palabras);

console.log(mapaPalabras);


let zonaPalabras = document.getElementById('palabras');
zonaPalabras.innerHTML = palabrasUnicas.join("<br>");
