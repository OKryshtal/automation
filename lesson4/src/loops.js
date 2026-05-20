const arr = [1, 3, 5, 6, 7, 8, 9, 10];

for (const value of arr) {
    console.log(`value: ${value} and index ${arr.indexOf(value)}`);
}

for (let i = 0; i < arr.length; i = i + 2) {
    console.log(`value: ${arr[i]} and index ${i}`);
}
const arr2 = [];

const reveredArr = arr.reverse();

for (const value of reveredArr) {
    console.log(`iteration: ${reveredArr.indexOf(value)}`);
    if (value % 2 === 0 && arr2.length < 3) {
        arr2.push(value);
    } else if (arr2.length >= 3) {
        break;
    }
}

console.log(arr2);

const arr3 = [];
for (let i = 0; i < arr.length; i++) {
    console.log(`iteration: ${i}`);
    if (arr[i] % 2 === 0) {
        if (arr[i] > 6) {
            continue;
        }
        arr3.push(arr[i]);
    }
}

console.log(arr3);

let i = 0;
while (i < arr.length) {
    console.log(`iteration: ${i} and value: ${arr[i]}`);
    i++;
}

const newArray = [1, 2, 4, 6, 7, 8];
while (newArray.length > 0) {
    const value = newArray.pop();
    console.log(`iteration: ${value} and array length: ${newArray.length}`);
}
console.log(newArray);

let j = 0;
do {
    console.log(`iteration: ${j} and value: ${arr[j]}`);
    j++;
} while (j < arr.length);

console.log('--------------HOME WORK-----------------');

console.log('========== FROM 0 TO 9 ==========');

console.log('--- FOR ---');
for (let i = 0; i <= 9; i++) {
    console.log(`for iteration: ${i}`);
}

console.log('--- WHILE ---');
let w1 = 0;
while (w1 <= 9) {
    console.log(`while iteration: ${w1}`);
    w1++;
}

console.log('--- DO...WHILE ---');
let d1 = 0;
do {
    console.log(`do...while iteration: ${d1}`);
    d1++;
} while (d1 <= 9);

console.log('========== FROM 100 TO 0 (step 10) ==========');

console.log('--- FOR ---');
for (let k = 100; k >= 0; k -= 10) {
    console.log(`for reverse iteration: ${k}`);
}

console.log('--- WHILE ---');
let w2 = 100;
while (w2 >= 0) {
    console.log(`while reverse iteration: ${w2}`);
    w2 -= 10;
}

console.log('--- DO...WHILE ---');
let d2 = 100;
do {
    console.log(`do...while reverse iteration: ${d2}`);
    d2 -= 10;
} while (d2 >= 0);
