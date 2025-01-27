let zoneCount = document.getElementById('content');

function countdown(ms) {
    return new Promise(resolve => { 
        let startTime = performance.now();

        let interval = setInterval(() => { 
            zoneCount.innerHTML = ms;

            ms--;

            if (ms == 0) { 
                clearInterval(interval);

                zoneCount.innerHTML = ms;

                resolve();
            }
        }, 1000);
    })
}

function showNotification () {
    Notification.requestPermission().then((response) => {
        if (response == 'granted') {
            let n = new Notification('Nuevo video subido!!', {
                body: 'Haz click para verlo',
            })

            n.addEventListener('click', () => {
                n.close();
                window.open('video.html');
            })
        }
    });
}

countdown(5)
    .then((resolve) => {
        showNotification();
    })