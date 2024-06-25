/*Advertistment Popup*/

document.addEventListener("DOMContentLoaded", function(){
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');
  function openPopup(){
  overlay.style.display = 'block';
  }
  function closePopup(){
  overlay.style.display = 'none';
  }
  closeBtn.addEventListener('click', closePopup);
  setTimeout(openPopup, 3000);
});

/*Header*/

const btn = document.getElementById("dropbar");
const nav = document.getElementById("dropbar-content");

const btnIcon = document.querySelector("i");

function toggleDisplay(){
    if(nav.style.top == "-100%"){
        nav.style.top = "0px";
        btnIcon.classList.add("fa-close");
        btnIcon.classList.remove("fa-bars");
    }
    else{
        nav.style.top = "-100%";
        btnIcon.classList.add("fa-bars");
        btnIcon.classList.remove("fa-close");
    }
}

btn.addEventListener("click", toggleDisplay);

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

/*Effects Audio*/

document.addEventListener('DOMContentLoaded', function (){
  var scrollSpy = new bootstrap.ScrollSpy(document.querySelector('.scrollspy-example'),{
  target: '#guitar'
  });
});

/*About Animation Trigger*/
document.addEventListener("DOMContentLoaded", () => {
  const animatedElement = document.querySelector('.animated-text');

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry =>{
  if (entry.isIntersecting){
  entry.target.classList.add('visible');
  observer.unobserve(entry.target);
  }
  });
  }, { threshold: 0.1 });
  observer.observe(animatedElement);
});

/*AUDIO OF SLIDER*/
function openAudio(src) {
  document.getElementById('audio-player-overlay').style.display = 'flex';
  document.getElementById('audio-source').src = src;
  document.getElementById('audio-player').load();
  document.getElementById('audio-player').play();
}

function closeAudio() {
  document.getElementById('audio-player-overlay').style.display = 'none';
  document.getElementById('audio-player').pause();
}

/*Podcast Animation Box*/
document.addEventListener('DOMContentLoaded', function() {
const podcastBoxes = document.querySelectorAll('.podcast-box');
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
}
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('animated');
    observer.unobserve(entry.target); 
}
});
}, observerOptions)
podcastBoxes.forEach(box => {
    observer.observe(box);
});
});