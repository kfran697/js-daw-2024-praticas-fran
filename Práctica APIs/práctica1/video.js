let video = document.querySelector('video');
let textZone = document.getElementById('textZone');

let isClickHandled = false;

video.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if (video.paused) {
            video.pause();
        } else {
            video.play();
        }
    } else if (event.button === 2) { 
        let minutes = Math.floor(video.duration / 60);
        let seconds = Math.floor(video.duration % 60);

        textZone.innerHTML = `Duracion: ${minutes}:${seconds}`;
    }
});

video.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});