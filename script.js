function stringBuilder(str) {
    return Array.from(str).map((char, index) => {
        const charCode = char.charCodeAt(0);
        if (index % 2 === 0) {
            if (charCode >= 65 && charCode <= 90) {
                return charCode === 90 ? 'A' : String.fromCharCode(charCode + 1);
            } else if (charCode >= 97 && charCode <= 122) {
                return charCode === 122 ? 'a' : String.fromCharCode(charCode + 1);
            } else if (charCode >= 48 && charCode <= 57) {
                return charCode === 57 ? '0' : String.fromCharCode(charCode + 1);
            } else {
                return char;
            }
        } else {
            if (charCode >= 65 && charCode <= 90) {
                return charCode === 65 ? 'Z' : String.fromCharCode(charCode - 1);
            } else if (charCode >= 97 && charCode <= 122) {
                return charCode === 97 ? 'z' : String.fromCharCode(charCode - 1);
            } else if (charCode >= 48 && charCode <= 57) {
                return charCode === 48 ? '9' : String.fromCharCode(charCode - 1);
            } else {
                return char;
            }
        }
    })
        .join('');
}

function doConvert() {
    const inputText = document.getElementById("inputText").value;
    const convertedString = stringBuilder(inputText);
    document.getElementById("converted").innerHTML = convertedString;
}