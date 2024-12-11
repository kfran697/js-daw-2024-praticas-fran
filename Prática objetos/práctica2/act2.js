Array.prototype.mediaAritmética = function() {
    let sum = this.reduce((acumulator, value) => acumulator + value, 0);
    return sum / this.length;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

console.log(numeros.mediaAritmética());