let a = 0;
console.log(a);

a = 1;
console.log(a);

let number = 1;
console.log(typeof number);

number = 1 / 'str';
console.log(number);
console.log(typeof number);

number = 'some string';
console.log(typeof number);

const str = 'some string' + ' ' + 'number ';
console.log(str);

const anotherString = `some string ${5} and ${str} osdjghajdb ${number} ghsaoihgresuerh ${number}`;
console.log(anotherString);
console.log(typeof anotherString);

const bool = true;
console.log(typeof bool);

const nullVar = null;
console.log(typeof nullVar);

const undefinedVar = undefined;
console.log(typeof undefinedVar);

const obj = {};
console.log(typeof obj);

const convertedBool = Boolean(1);
console.log(convertedBool);

const boolStr = 'false';

const anotherconvertedBoolStr = boolStr === 'true';
console.log(anotherconvertedBoolStr);
console.log(typeof anotherconvertedBoolStr);

let sum = 5 + '10';
console.log(sum);
console.log(typeof sum);

sum = '10' + 5;
console.log(sum);
console.log(typeof sum);

sum = +'10' + 5;
console.log(sum);
console.log(typeof sum);
