function stringBuilder(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];
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
            } else if (consonants.includes(char)) {
                if (char === 'z') {
                    return 'b';
                } else if (char === 'Z') {
                    return 'B';
                } else {
                    const consonantIndex = consonants.indexOf(char);
                    return consonants[consonantIndex + 1];
                }
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
            } else if (consonants.includes(char)) {
                if (char === 'b') {
                    return 'z';
                } else if (char === 'B') {
                    return 'Z';
                } else {
                    const consonantIndex = consonants.indexOf(char);
                    return consonants[consonantIndex - 1];
                }
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