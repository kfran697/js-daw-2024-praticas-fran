function multiplyByTwo (num) {
    return new Promise ((resolve) => {
        resolve(num * 2);
    });
}

function addTen (num) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(num + 10);
        }, 1000);
    });
}

multiplyByTwo(5)
    .then((resultado) => addTen(resultado))
    .then((anotherResultado) => {console.log(anotherResultado);})
