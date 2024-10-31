/* 
* Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. 
* Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta que no se pueden repetir los números en una misma combinación.
*/

let combinacion = new Array();

for (let i = 0; i < 50; i++) {
    combinacion = new Array()
    let numRandom = Math.floor(Math.random() * 49) + 1;

    for (let j = 0; j < 5; j++) {
        do {
            numRandom = Math.floor(Math.random() * 49) + 1;

        } while (combinacion.some(function(num) {
            return num == numRandom;
        }))
        combinacion.push(numRandom);

    }

    console.log(combinacion);
}

