var button = document.getElementById('listen_video');
var watch = document.querySelector('.watch');
button.addEventListener('click', function () {
    watch.classList.toggle('pass');
    button.textContent = watch.classList.contains('pass') ? 'Ocultar Vídeo' : 'Vídeo/Apresentação';
});






