////http://stackoverflow.com/questions/3800795/parse-a-textarea-in-substrings-based-on-line-breaks-in-javascript

function actOnEachLine(textarea, func) {
    var lines = textarea.value.replace(/\r\n/g, "\n").split("\n");
    var newLines, i;

    // Use the map() method of Array where available
    if (typeof lines.map != "undefined") {
        newLines = lines.map(func);
    } else {
        newLines = [];
        i = lines.length;
        while (i--) {
            newLines[i] = func(lines[i]);
        }
    }
    textarea.value = newLines.join("\r\n");
}

