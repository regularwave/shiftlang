function stringBuilder(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    return Array.from(str).map((char, index) => {
        const charCode = char.charCodeAt(0);
        if (index % 2 === 0) {
            if (vowels.includes(char)) {
                if (char === 'y') {
                    return 'a';
                } else if (char === 'Y') {
                    return 'A';
                } else {
                    const vowelIndex = vowels.indexOf(char);
                    return vowels[vowelIndex + 1];
                }
            } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                return charCode === 90 ? 'A' : charCode === 122 ? 'a' : String.fromCharCode(charCode + 1);
            } else if (charCode >= 48 && charCode <= 57) {
                return charCode === 57 ? '0' : String.fromCharCode(charCode + 1);
            } else {
                return char;
            }
        } else {
            if (vowels.includes(char)) {
                if (char === 'a') {
                    return 'y';
                } else if (char === 'A') {
                    return 'Y';
                } else {
                    const vowelIndex = vowels.indexOf(char);
                    return vowels[vowelIndex - 1];
                }
            } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                return charCode === 65 ? 'Z' : charCode === 97 ? 'z' : String.fromCharCode(charCode - 1);
            } else if (charCode >= 48 && charCode <= 57) {
                return charCode === 48 ? '9' : String.fromCharCode(charCode - 1);
            } else {
                return char;
            }
        }
    }).join('');
}

function doConvert() {
    const inputText = document.getElementById("inputText").value;
    const convertedString = stringBuilder(inputText);
    document.getElementById("converted").innerHTML = convertedString;
}