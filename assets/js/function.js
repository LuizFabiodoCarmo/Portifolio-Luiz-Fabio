

let video = document.getElementsByClassName("video-screen")[0];


function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime= 0;
}

function inc(){
    video.playbackRate += 0.10;
}

function dec(){
    video.playbackRate -= 0.10;;
}

function retroceder(){
    video.currentTime -= 0.20;
}

function avançar(){
    video.currentTime += 0.20;
}

// fazer o vídeo parar quando ele for retraído

// Algo como declarar a função que o culta o vídeo em var 

