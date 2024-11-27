function changeBackground (event) {
    if (event.altKey && event.code == 'F12') {
        document.getElementById('imagen').style.backgroundImage = "url('https://picsum.photos/900/900/?blur')";
    }


}

document.body.addEventListener('keydown', changeBackground);

