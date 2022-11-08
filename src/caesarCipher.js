export default function caesarCipher(string, shift) {
    let encrypted = '';
    for (let i = 0; i < string.length; i++) {
        let charCode = string[i].charCodeAt();
        if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
            if (charCode > 64 && charCode < 91) {
                let encryptedChar = String.fromCharCode((charCode + shift - 65) % 26 + 65);
                encrypted += encryptedChar;
            } else {
                let encryptedChar = String.fromCharCode((charCode + shift - 97) % 26 + 97);
                encrypted += encryptedChar;
            };
        } else {
            encrypted += string[i];
        };
    };
    return encrypted;
};