let textArea;
let textAreaInput;

textArea = document.querySelector("textarea");

/* Converts all the text entered into the textbox into uppercase letters */
document.querySelector("#upper-case").addEventListener("click", function() {
    textAreaInput = textArea.value.toUpperCase();
    textArea.value = textAreaInput;
});

/* Converts all the text entered into the textbox into lowercase letters */
document.querySelector("#lower-case").addEventListener("click", function() {
    textAreaInput = textArea.value.toLowerCase();
    textArea.value = textAreaInput;
});

/* Converts the first letter of the words entered into the textbox into uppercase letters */
document.querySelector("#proper-case").addEventListener("click", function() {
    textAreaInput = textArea.value.split(" ");

    for (let i=0; i < textAreaInput.length; i++) {
        textAreaInput[i] = textAreaInput[i][0].toUpperCase() + textAreaInput[i].substring(1);
    }
    textArea.value = textAreaInput.join(" ");
});

/* Converts only the beginning of a sentence into uppercase letters */
document.querySelector("#sentence-case").addEventListener("click", function() {
    textAreaInput = textArea.value.toLowerCase().split(".").filter(item => item !== "");

    for (let i=0; i < textAreaInput.length; i++) {
        if (textAreaInput[i][0] == " ") {
            textAreaInput[i] = textAreaInput[i][1].toUpperCase() + textAreaInput[i].substring(2);
        } else {
            textAreaInput[i] = textAreaInput[i][0].toUpperCase() + textAreaInput[i].substring(1);
        }
    }
    textAreaInput[textAreaInput.length - 1] = textAreaInput[textAreaInput.length - 1] + "."; // adding period back.
    textArea.value = textAreaInput.join(". ");
});

/* Takes the text in the textarea element and generates a txt file with it */
document.querySelector("#save-text-file").addEventListener("click", function() {
    textAreaInput = textArea.value;
    download("text.txt", textAreaInput);
});

/* Function to create the file so it can be downloaded */
function download(filename, text) {
    let element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}