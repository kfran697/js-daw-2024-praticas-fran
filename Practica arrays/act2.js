/* 
* Se desea validar hasta qué punto la función Math.random es realmente aleatoria. 
* Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10. 
* Por consola mostraremos cada número del 1 al 10 y a continuación el número de veces que ha salido ese número. 
*/

let numbers = new Array();
let numOFNumbers = new Map();

for (let i = 0; i < 10000; i++) {
    numbers.push(Math.floor(Math.random() * 10) + 1);
}

for (let number of numbers) {
    let cont = 0;
    numOFNumbers.set(number, cont);
    
    for (let number2 of numbers) {
        let numberRepeat = number;

        if (number2 === numberRepeat) {
            cont++;
        }
    };

    numOFNumbers.set(number, cont);

}

for (let i = 1; i < 11; i++) {
    console.log('Número: ' + i + ': ' + numOFNumbers.get(i));
}
