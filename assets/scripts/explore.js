// explore.js

// Used code from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis to populate the voices list

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {

  let voiceOptions = document.getElementById('voice-select');
  
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-name", voices[i].name);
      voiceOptions.appendChild(option);
    }
  };

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let inputTxt = document.querySelector("textarea");
  let voiceChange = document.querySelector("select");
  const submitButton = document.querySelector("button");
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    let selectedOption = voiceChange.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);

    let amISpeaking = synth.speaking;
    let image = document.querySelector('img');
    
    utterThis.addEventListener("end", (event) => {
      image.src = "assets/images/smiling.png";
    });

    if (amISpeaking) {
      image.src = "assets/images/smiling-open.png";
    }
  });
}