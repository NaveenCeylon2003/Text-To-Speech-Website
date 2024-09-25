let utterance = new SpeechSynthesisUtterance();
let availableVoices = [];

let voiceDropdown = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    availableVoices = window.speechSynthesis.getVoices();
    utterance.voice = availableVoices[0];

    availableVoices.forEach((voice, index) => {
        voiceDropdown.options[index] = new Option(voice.name, index);
    });
};

voiceDropdown.addEventListener("change", () => {
    utterance.voice = availableVoices[voiceDropdown.value];
});

document.querySelector("button").addEventListener("click", () => {
    utterance.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(utterance);
});
