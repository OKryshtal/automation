const car = 'BMW';

switch (car) {
    case 'BMW':
        console.log('You have a BMW');
        break;
    case 'Audi': {
        console.log('You have an Audi');
        break;
    }
    case 'Mercedes': {
        console.log('You have a Mercedes');
        break;
    }
    default:
        console.log('You have a different car');
}

const number = 3;
{
    switch (number) {
        case 1:
            console.log('Number is 1');
            break;
        case 2:
            console.log('Number is 2');
            break;
        case 3:
            console.log('Number is 3');
            break;
        default:
            console.log('Number is not 1, 2, or 3');
    }
}

const role = 'admin';

switch (role) {
    case 'admin':
        console.log('Full access 🔓');
        break;

    case 'user':
        console.log('Limited access 🔒');
        break;

    case 'guest':
        console.log('Read-only access 👀');
        break;

    default:
        console.log('Unknown role ❓');
}
