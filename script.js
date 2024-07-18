let speech = new SpeechSynthesisUtterance(); // is men new SpeechSynthesisUtterance() is function he jo speech karta he

let voices = []; // voice ek array banaya he

let selectvoice = document.querySelector("select"); // ek our slectVoice ke name se ham ni varible banaya he jo ke Dom ke help se jo be ham Select karengi HTML men wo SelctVoive men save ho jaie ga
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
