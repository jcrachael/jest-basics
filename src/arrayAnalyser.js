export default function arrayAnalyser(array) {
    const object = {};

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    let average = sum / array.length;
    object.average = average;

    let max = Math.max(...array);
    let min = Math.min(...array);
    object.max = max;
    object.min = min;
    object.length = array.length;
    return object;
}