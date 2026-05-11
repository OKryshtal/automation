const a = 0;
const d = '1';
const f = undefined;

if (typeof a === 'number') {
    console.log('a is a number');
}

if (isNaN(a / d)) {
    console.log('${a / d} is not a number');
} else {
    console.log('${a / d} is a number');
}

if (isNaN(a / d)) console.log('${a / d} is not a number');
else console.log('${a / d} is a number');

if (f) {
    console.log('f is truthy');
} else if (f === null) {
    console.log('f is null');
} else {
    console.log('f is truthy and not null');
}

if (f || d > 0) {
    console.log('f is truthy or d is greater than 0');
} else if ((a > 0 && d < 0) || !f) {
    console.log('a is greater than 0 and d is less than 0 or f is falsy');
}

console.log('-----Скорочений запис IF-ELSE---------');

const j = typeof d === 'number' ? d : Number(d);
console.log(j, typeof j);

console.log('Adult');
const age = 20;

if (age >= 18 && age < 60) {
    console.log('Ви достатньо дорослий, доступ дозволено ✅');
}

console.log('Examination');
const score = 91;

if (score >= 90) {
    console.log('Оцінка: A 🏆');
} else if (score >= 75 && score < 90) {
    console.log('Оцінка: B 👍');
} else if (score >= 60) {
    // прибрали зайве score === 59
    console.log('Оцінка: C 🙂');
} else {
    console.log('Не склав ❌');
}
