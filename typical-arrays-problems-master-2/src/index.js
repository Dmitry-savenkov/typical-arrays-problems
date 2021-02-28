exports.min = function min(array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    let minNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

exports.max = function max(array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    let maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

exports.avg = function avg(array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    let len = array.length;
    let sum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
    return (sum / len);
}