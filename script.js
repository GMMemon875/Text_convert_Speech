let speech = new SpeechSynthesisUtterance();

let voices = [];

let selectvoice = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (selectvoice.options[i] = new Option(voice.name, i))
  );
};

selectvoice.addEventListener("change", () => {
  speech.voice = voices[selectvoice.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
