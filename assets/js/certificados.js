function enterFullscreen(img) {
  if (img.requestFullscreen) {
      img.requestFullscreen();


  } else if (img.mozRequestFullScreen) { /* Firefox */
      img.mozRequestFullScreen();
  } else if (img.webkitRequestFullscreen) { /* Chrome, Safari e Opera */
      img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { /* IE/Edge */
      img.msRequestFullscreen();
  }
}

// --------------------------------------------------------------



isFullScreen = false;
var elem = document.documentElement;
function AtivarDesativarFS() {
    //Se o estado atual for "FullScreen", desativá-lo.
      if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullScreen = false;
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
      isFullScreen = false;
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
      isFullScreen = false;
    }


  if (elem.requestFullscreen) {
     elem.requestFullscreen();
     isFullScreen = true;
  } else if (elem.mozRequestFullScreen) { /* Firefox */
     elem.mozRequestFullScreen();
      isFullScreen = true;
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
     isFullScreen = true;
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
     isFullScreen = true;
  }

}