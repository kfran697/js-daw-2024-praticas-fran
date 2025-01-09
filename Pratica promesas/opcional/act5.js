import { temporizador, cuenta } from "./temporizador.js";

const content = document.getElementById('content');

temporizador(5000)
    .then((result) => content.innerHTML = result)
    .catch((error) => content.innerHTML = error);

cuenta(6, document.getElementById('cuenta1'));

let element = document.getElementById('cuenta2');

cuenta(60, element, 100, () => {
    element.innerHTML = 'FIN';
});