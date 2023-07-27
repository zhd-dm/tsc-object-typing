interface IMock {
    name: string;
    age: number;
    address: {
        country: string;
        city: string;
        ZIP: number;
    };
}

type TMock = {
    name: string;
    age: number;
    address: {
        country: string;
        city: string;
        ZIP: number;
    };
}

// TODO:
// enum EMock {
//     VALID = 'VALID',
//     INVALID = 'INVALID',
//     PENDING = 'PENDING',
// }

const INTERFACE_MOCK: IMock = {
    name: 'Demyan',
    age: 23,
    address: {
        country: 'Spain',
        city: 'Barcelona',
        ZIP: 123456
    }
}

const TYPE_MOCK: TMock = {
    name: 'Demyan',
    age: 23,
    address: {
        country: 'Spain',
        city: 'Barcelona',
        ZIP: 123456
    }
}