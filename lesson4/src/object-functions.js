const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA',
        coordinates: {
            latitude: 40.7128,
            longitude: -74.006
        }
    },
    profile: {
        bio: 'Software developer',
        social: {
            twitter: '@johndoe',
            github: 'johndoe',
            linkedin: {
                url: 'linkedin.com/in/johndoe',
                followers: 1500
            }
        }
    },

    // optionalParameter: {
    //     param: 'This is an optional parameter'
    // },
    summary() {
        return `${this.name} lives in ${this.address.city}, ${this.address.country} and is a ${this.profile.bio}.`;
    },
    keysCount() {
        return Object.keys(this).length;
    },
    multiply(a) {
        console.log(this.profile.social.linkedin.followers * a);
    }
};
//console.log(user);
console.log(user.summary());
console.log(`Number of keys in user object: ${user.keysCount()}`);
user.multiply(2);

console.log(user.optionalParameter?.param);
// Optional chaining operator to safely access nested properties
