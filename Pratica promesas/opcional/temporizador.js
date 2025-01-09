export function temporizador (msNum) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve('Tiempo concluido');
        }, msNum);

        setTimeout (() => {
            reject('El tiempo no va bien');
        }, msNum * 2);
    });
}

export async function cuenta (start, element = document.body, msNum = 1000, callback) {
    let cont = start;

    let interval = setInterval(() => {
        element.innerHTML = cont;
        
        if (cont <= 0) {
            clearInterval(interval);
            if (callback) {
                callback();
            }
        }

        cont--;
    }, msNum);
}