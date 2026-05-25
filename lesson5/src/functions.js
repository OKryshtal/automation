export function addNumbers(a, b) {
    let sum;
    if (areParametersNumbers(a, b)) {
        sum = a + b;
    } else {
        const convertedNumbers = getConvertedNumbers(a, b);
        if (convertedNumbers) {
            sum = convertedNumbers[0] + convertedNumbers[1];
        } else {
            return 0;
        }
    }
    return sum;
}

export function checkNumber(a) {
    if (typeof a === 'number') {
        if (a > 5) {
            return 'greater than 5';
        } else {
            return 'less than or equal to 5';
        }
    }
}

export function checkNumberShortened(a) {
    if (typeof a === 'number') {
        return a > 5 ? 'greater than 5' : 'less than or equal to 5';
    }
}

export function sumArrayElements(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }

    return sum;
}

function areParametersNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return true;
    } else {
        return false;
    }
}

function getConvertedNumbers(a, b) {
    const aNumber = Number(a);
    const bNumber = Number(b);
    if (!isNaN(aNumber) && !isNaN(bNumber)) {
        return [aNumber, bNumber];
    } else {
        return [0, 0];
    }
}
