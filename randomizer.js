function randomizeFont() {
    var textarea = document.getElementById("pText");
    var text = textarea.value;
    var randomizedText = "";

    // Split the text by line breaks
    var lines = text.split(/\r?\n/);

    // Iterate through each line
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        // Create a new paragraph element for each line
        randomizedText += '<p>';

        // Iterate through each character in the line
        for (var j = 0; j < line.length; j++) {
            var randomFont = getRandomFont();
            var char = line.charAt(j);
            randomizedText += '<span style="font-family: ' + randomFont + '">' + char + '</span>';
        }

        // Close the paragraph element for the line
        randomizedText += '</p>';
    }

    document.getElementById("output").innerHTML = randomizedText;
}

function getRandomFont() {
    var fonts = ["Arial", "Times New Roman", "Verdana", "Courier New", "Comic Sans MS", "Fantasy"];
    var randomIndex = Math.floor(Math.random() * fonts.length);

    return fonts[randomIndex];
}
