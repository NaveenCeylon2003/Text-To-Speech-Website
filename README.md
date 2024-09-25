# Text to Speech Converter

This is a simple Text to Speech Converter built using **HTML**, **CSS**, and **JavaScript**. It allows users to input text, select a voice from a list of available voices, and have the text read aloud using the **Web Speech API**.

## Features

- **Input Text**: Users can type text into a `textarea` to be converted into speech.
- **Voice Selection**: Users can select from a list of available voices (depending on the browser and system).
- **Text to Speech**: The app uses the `SpeechSynthesisUtterance` API to read the text aloud with the selected voice.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Basic styling to improve the appearance.
- **JavaScript**: Logic to handle text input, voice selection, and speech synthesis.
- **Web Speech API**: The JavaScript API used to convert text to speech.

## How It Works

1. **Select Voice**: The list of voices is populated automatically when the available voices are loaded into the browser.
2. **Input Text**: The user inputs the text to be read in the provided `textarea`.
3. **Play Text**: Upon clicking the "Listen" button, the text is spoken out loud using the selected voice.

## Code Overview

1. **SpeechSynthesisUtterance**:
   - The core object for speech synthesis. It stores the text and voice to be spoken.
2. **Voice Selection**:

   - The available voices are fetched from the `speechSynthesis` API and populated into the `<select>` element.

3. **Event Listeners**:
   - **onvoiceschanged**: Listens for changes in the list of voices and populates the dropdown when the voices are available.
   - **change event** on the select dropdown: Updates the voice to the one chosen by the user.
   - **click event** on the button: When clicked, the browser speaks the text in the `textarea`.

## Installation

To run this project:

1. Clone the repository or download the files.
2. Open the `index.html` file in your web browser.

```bash
git clone <repository-url>
cd text-to-speech-converter
open index.html
```
"# Text-To-Speech-Website" 
