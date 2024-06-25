/*Sound Effects*/
function showMusic(){
    document.getElementById("music-rhythm").style.display = "block";
    document.getElementById("nature-noise").style.display = "none";
    document.getElementById("human-action").style.display = "none";
    document.getElementById("animal-voice").style.display = "none";
  }
  
  function showNature(){
    document.getElementById("nature-noise").style.display = "block";
    document.getElementById("music-rhythm").style.display = "none";
    document.getElementById("human-action").style.display = "none";
    document.getElementById("animal-voice").style.display = "none";
  }
  
  function showHuman(){
    document.getElementById("human-action").style.display = "block";
    document.getElementById("nature-noise").style.display = "none";
    document.getElementById("music-rhythm").style.display = "none";
    document.getElementById("animal-voice").style.display = "none";
  }
  
  function showAnimal(){
    document.getElementById("animal-voice").style.display = "block";
    document.getElementById("nature-noise").style.display = "none";
    document.getElementById("human-action").style.display = "none";
    document.getElementById("music-rhythm").style.display = "none";
  }

  let downloadLink = document.querySelectorAll(".download-link");

  downloadLink.forEach((item) => {
    item.addEventListener("click", (event) => {
    event.preventDefault();
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', item.href, true);
    xhr.responseType = 'blob'; 
    xhr.onload = function() {
        var url = window.URL.createObjectURL(xhr.response); 
        var a = document.createElement('a');
        a.href = url;
        a.download = 'audiofile.mp3'; 
        document.body.appendChild(a);
        a.click(); 
        document.body.removeChild(a);
    };
    xhr.send();
    });
  });