const obj1 = {
    name: 'Object1',
    parameters: [
        {
            name: 'Parameter1',
            value: 10
        },
        {
            name: 'Parameter2',
            value: 20
        }
    ]
};

const obj2 = obj1;

console.log(obj1);
console.log(obj2);

console.log('-------------------------------');

obj2.name = 'Object2';
obj2.parameters[0].value = 100;

console.log(obj1);
console.log(obj2);

console.log('--------------Object assign-----------------');
const obj3 = Object.assign({}, obj1);
obj3.name = 'Object3';
obj3.parameters[0].value = 1000;

console.log(obj1);
console.log(obj3);

console.log('--------------Spread operator-----------------');
const obj4 = { ...obj1 };
obj4.name = 'Object4';
obj4.parameters[0].value = 10000;

console.log(obj1);
console.log(obj4);

console.log('--------------structuredClone-----------------');
const obj5 = structuredClone(obj1);
obj5.name = 'Object5';
obj5.parameters[0].value = 1;

console.log(obj1);
console.log(obj5);

console.log('--------------JSON parse/stringify-----------------');
console.log(`text representation of Object ${JSON.stringify(obj1, undefined, 4)}`);
const obj6 = JSON.parse(JSON.stringify(obj1));
obj6.name = 'Object6';
obj6.parameters[0].value = 2;

console.log(obj1);
console.log(obj6);

console.log('--------------HOME WORK-----------------');

const testUser = {
    id: 101,
    name: 'Olha',
    isActive: true,

    // 1 level of nesting
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },

    // array of objects (2 levels of nesting)
    tests: [
        {
            id: 1,
            name: 'Login test',
            status: 'passed'
        },
        {
            id: 2,
            name: 'Checkout test',
            status: 'failed'
        }
    ],

    // method to print summary
    printSummary() {
        console.log(`User: ${this.name}`);
        console.log(`Location: ${this.address.city}, ${this.address.country}`);

        this.tests.forEach((test) => {
            console.log(`Test: ${test.name} → ${test.status}`);
        });
    }
};

//method call
testUser.printSummary();
