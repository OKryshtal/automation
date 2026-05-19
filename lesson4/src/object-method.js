const obj = {
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

const keys = Object.keys(obj);
console.log(keys);
console.log(obj[keys[0]], obj[keys[1]]);

const values = Object.values(obj);
console.log(values);

const entries = Object.entries(obj);
console.log(entries);

const [key, value] = entries[0];
console.log(key, value);
