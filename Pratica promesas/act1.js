function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 > num2) {
            resolve(`El número ${num1} es mayor que ${num2}`);
        } else {
            reject(`El número ${num1} no es mayor que ${num2}`);
        }
    });
}

compareNumbers(2, 4)
    .then((mensaje) => {console.log(mensaje);})
    .catch((error) => console.log(error));
