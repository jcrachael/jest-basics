function reverseString(string) {
    let array = [];
    for (let i = string.length; i >= 0; i--) {
        array.push(string[i]);
    }
    let reversedString = array.join('');
    return reversedString;
}

export default reverseString;