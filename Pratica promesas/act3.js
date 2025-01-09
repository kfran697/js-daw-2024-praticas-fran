function taskA () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Tarea A completada');
        }, 1000);
    });
}

function taskB () {
    return new Promise ((_, reject) => {
        setTimeout(() => {
            reject('Tarea B falló');
        }, 2000);
    });
}

function taskC () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Tarea C completada');
        }, 3000);
    });
}

Promise.all([taskA(), taskB(), taskC()])
    .then((resultado) => {console.log(resultado);})
    .catch((error) => {console.log(error);});