import {ObjKeys} from './public.ts';

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

const userInterfaceMock: IMock = {
    name: 'Demyan',
    age: 23,
    address: {
        country: 'Spain',
        city: 'Barcelona',
        ZIP: 123456
    }
}

const userTypeMock: TMock = {
    name: 'Demyan',
    age: 23,
    address: {
        country: 'Spain',
        city: 'Barcelona',
        ZIP: 123456
    }
}

const checkInterface = Object.keys(userInterfaceMock) as ObjKeys<IMock>;
checkInterface.map(key => {
    switch (key) {
        case 'name':
            key
            break
        case 'age':
            key
            break
        case 'address':
            key
            break
        default:
            key // never
    }
});

const checkType = Object.keys(userTypeMock) as ObjKeys<TMock>;
checkType.map(key => {
    switch (key) {
        case 'name':
            key
            break
        case 'age':
            key
            break
        case 'address':
            key
            break
        default:
            key // never
    }
});

// TODO:
// const checkEnum = Object.keys(EMock) as ObjKeys<EMock>;
// checkEnum.map(key => {
//     switch (key) {
//         case 'VALID':
//             key
//             break
//         case 'INVALID':
//             key
//             break
//         case 'PENDING':
//             key
//             break
//         default:
//             key // never
//     }
// })
