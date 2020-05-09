dynamicdisplay();
    function dynamicdisplay() {
      video = document.getElementById("video");

      if(window.innerHeight > window.innerWidth) {
        video.style.objectFit = "cover";
      }
      else {
        video.style.objectFit = "none";
      }

      setTimeout(dynamicdisplay, 1);
    }
