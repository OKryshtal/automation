export const addNumbersExpr = function (a, b) {
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
};

const areParametersNumbers = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return true;
    } else {
        return false;
    }
};

const getConvertedNumbers = function (a, b) {
    const aNumber = Number(a);
    const bNumber = Number(b);
    if (!isNaN(aNumber) && !isNaN(bNumber)) {
        return [aNumber, bNumber];
    } else {
        return [0, 0];
    }
};
