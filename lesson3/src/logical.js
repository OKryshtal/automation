const a = 0;
const b = 1;
const c = 'str';
const d = '1';
const e = 'str';

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(b === d);
console.log(b == d);

console.log(a !== d);
console.log(a != d);

console.log(c === d);
console.log(c === e);

// Logical operators
const f = true;
const g = false;

console.log(f && g);
console.log(f || g);
console.log(!f);
console.log(!g);

const h = undefined;
const i = null;
const j = h ?? i ?? 'default value';
console.log(j);

// =====================
// 1. Variable declarations of different types
// =====================

const num = 10;
const str = '10';
const isActive = true;
const emptyValue = null;
const notDefined = undefined;
console.log(notDefined, typeof notDefined);
const user = { name: 'Olha' };

console.log('Types of variables:');
console.log(typeof num);
console.log(typeof str);
console.log(typeof isActive);
console.log(typeof emptyValue);
console.log(typeof notDefined);
console.log(typeof user);

console.log('---------------------------');

// =====================
// 2. Comparison operations
// =====================

console.log('Comparison:');

console.log(num == str);
console.log(num === str);

console.log(num > 5);
console.log(num < 5);

console.log(emptyValue == notDefined);
console.log(emptyValue === notDefined);

console.log('---------------------------');

// =====================
// 3. Logical operators
// =====================

console.log('Logical operators:');

// AND
console.log(num > 5 && isActive);
// true && true → true

// OR
console.log(num < 5 || isActive);
// false || true → true

// NOT
console.log(!isActive);
// false

console.log('---------------------------');

// =====================
// 4. Use in conditions
// =====================

if (num === 10 && str === '10') {
    console.log('Both conditions are true ✅');
}

if (num > 20 || isActive) {
    console.log('At least one condition is true ✅');
}

if (!notDefined) {
    console.log('Variable notDefined is falsy ❗');
}

if (emptyValue === null) {
    console.log('Variable emptyValue equals null');
}

console.log('---------------------------');

//additional example

const age = 22;

if (age >= 18 && age < 60) {
    console.log('Access allowed 🟢');
} else {
    console.log('Access denied 🔴');
}
