// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  let image = document.querySelector('img'); 
  let audio = document.querySelector('audio');
  let selectElement = document.getElementById('horn-select'); 
  
  selectElement.addEventListener("change", (event) => {
    switch (selectElement.value) {
      case 'air-horn':
        image.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case 'car-horn':
        image.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case 'party-horn':
        image.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
        break;
    }
  });

  let volumeImage = document.querySelector('#volume-controls img');
  let selectImage = document.getElementById('volume');

  selectImage.addEventListener("input", (event) => {
    let volumeLevel = parseInt(selectImage.value);
    switch (true) {
      case volumeLevel === 0:
        volumeImage.src = "assets/icons/volume-level-0.svg";
        audio.volume = 0;
        break;
      case volumeLevel < 33:
        volumeImage.src = "assets/icons/volume-level-1.svg";
        audio.volume = volumeLevel / 100;
        break;
      case volumeLevel < 67:
        volumeImage.src = "assets/icons/volume-level-2.svg";
        audio.volume = volumeLevel / 100;
        break;
      default:
        volumeImage.src = "assets/icons/volume-level-3.svg";
        audio.volume = volumeLevel / 100;
    }
  });

  let playButton = document.querySelector('button');

  playButton.addEventListener("click", (event) => {
    audio.play();
    if (selectElement.value === 'party-horn') 
      jsConfetti.addConfetti();
  });
}