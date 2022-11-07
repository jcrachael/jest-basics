function capitalise(string) {
    let firstChar = string.slice(0,1);
    firstChar = firstChar.toUpperCase();
    let firstCharRemoved = string.slice(1);
    let capitalisedString = firstChar + firstCharRemoved
    return capitalisedString;
}

export default capitalise