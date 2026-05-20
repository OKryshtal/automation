const arr = ['1', 2, true, null, undefined, { name: 'Object' }, [1, 2, 3], new Date('2024-01-01')];
console.log(arr);

for (const value of arr) {
    console.log(`value: ${value} and index ${arr.indexOf(value)}`);
}

const arr2 = arr;
arr2[0] = 'Changed value';

console.log(arr);
console.log(arr2);

const filteredArr = arr.filter((value) => value != null && typeof value !== 'object');
console.log(filteredArr);

const findArr = arr.find((value) => value != null && typeof value !== 'object');
console.log(findArr);

arr.push(...[1, 2, 3, 4, 5]);
console.log(arr);

const sortedArray = arr
    .filter((value) => typeof value === 'number')
    .sort((a, b) => a - b)
    .reverse();
console.log(sortedArray);

const multipliedArray = sortedArray.map((value) => value * 2);
console.log(sortedArray);
console.log(multipliedArray);

multipliedArray.forEach((value) => {
    if (value > 5) {
        console.log(`Value ${value} is greater than 5`);
    }
});
console.log(multipliedArray);

console.log('--------------HOME WORK-----------------');

// ======================
// STRING ARRAY
// ======================
const strArr = ['apple', 'banana', 'cherry', 'apple'];

console.log('--- STRING ---');

// forEach
strArr.forEach((value, index) => {
    console.log(`value: ${value}, index: ${index}`);
});

// map
const upperStr = strArr.map((value) => value.toUpperCase());
console.log(upperStr);

// filter
const filteredStr = strArr.filter((value) => value.includes('a'));
console.log(filteredStr);

// find
const foundStr = strArr.find((value) => value === 'banana');
console.log(foundStr);

// indexOf
console.log(strArr.indexOf('apple'));

// concat
const concatStr = strArr.concat(['kiwi']);
console.log(concatStr);

// sort
console.log([...strArr].sort());

// reduce
const joinedStr = strArr.reduce((acc, val) => acc + ' ' + val);
console.log(joinedStr);

// groupBy
const groupedStr = Object.groupBy(strArr, (val) => val);
console.log(groupedStr);

// ======================
// NUMBER ARRAY
// ======================
const numArr = [5, 3, 8, 1, 2];

console.log('--- NUMBER ---');

// map
const doubled = numArr.map((n) => n * 2);
console.log(doubled);

// filter
const filteredNum = numArr.filter((n) => n > 3);
console.log(filteredNum);

// sort
const sortedNum = [...numArr].sort((a, b) => a - b);
console.log(sortedNum);

// reduce
const sum = numArr.reduce((acc, n) => acc + n, 0);
console.log(sum);

// find
console.log(numArr.find((n) => n > 4));

// indexOf
console.log(numArr.indexOf(8));

// concat
console.log(numArr.concat([10, 20]));

// forEach
numArr.forEach((n) => console.log(n));

// groupBy (even / odd)
const groupedNum = Object.groupBy(numArr, (n) => (n % 2 === 0 ? 'even' : 'odd'));
console.log(groupedNum);

// ======================
// BOOLEAN ARRAY
// ======================
const boolArr = [true, false, true, false];

console.log('--- BOOLEAN ---');

// map
const inverted = boolArr.map((b) => !b);
console.log(inverted);

// filter
console.log(boolArr.filter((b) => b));

// reduce
const trueCount = boolArr.reduce((acc, b) => acc + (b ? 1 : 0), 0);
console.log(trueCount);

// find
console.log(boolArr.find((b) => b === false));

// indexOf
console.log(boolArr.indexOf(true));

// concat
console.log(boolArr.concat([true]));

// forEach
boolArr.forEach((b) => console.log(b));

// groupBy
const groupedBool = Object.groupBy(boolArr, (b) => (b ? 'true' : 'false'));
console.log(groupedBool);

// ======================
// ANY ARRAY
// ======================
const anyArr = [1, 'text', true, null, 5];

console.log('--- ANY ---');

// map
const types = anyArr.map((v) => typeof v);
console.log(types);

// filter
const onlyNumbers = anyArr.filter((v) => typeof v === 'number');
console.log(onlyNumbers);

// find
console.log(anyArr.find((v) => typeof v === 'string'));

// indexOf
console.log(anyArr.indexOf(null));

// concat
console.log(anyArr.concat(['new value']));

// reduce
const stringConcat = anyArr.reduce((acc, v) => acc + ' ' + String(v), '');
console.log(stringConcat);

// forEach
anyArr.forEach((v) => console.log(v));

// groupBy (by type)
const groupedAny = Object.groupBy(anyArr, (v) => typeof v);
console.log(groupedAny);
