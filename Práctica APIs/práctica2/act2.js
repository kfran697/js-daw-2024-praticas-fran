let stopButton = document.getElementById("stopButton");
let startButton = document.getElementById("startButton");
let downloadLink = document.getElementById('downloadLink')
let mediaRecorder;
let chunks = [];

navigator.mediaDevices.getUserMedia({ audio: true , video: true })
  .then(function(stream) {

    startButton.addEventListener('click', () => {
        chunks = [];

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function(event) {
        chunks.push(event.data);
        };

        mediaRecorder.onstop = function() {
            let blob = new Blob(chunks, { type: 'audio/mp3' });
            let url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = 'grabacion.mp4';
        };

        stopButton.disabled = false;
        startButton.disabled = true;

        mediaRecorder.start();

        stopButton.addEventListener('click', () => {
            stopButton.disabled = true;
            startButton.disabled = false;
    
            mediaRecorder.stop();
        })
    });
  })
  .catch(function(error) {
    alert('No se ha podido acceder a la camara o microfono:', error);
  });