let palabras = guardarPalabrasPrompt();

let palabrasUnicas = [...new Set(palabras)];
palabrasUnicas.sort((a, b) => b.localeCompare(a));

let zonaPalabras = document.getElementById('palabras');
zonaPalabras.innerHTML = palabrasUnicas.join("<br>");
