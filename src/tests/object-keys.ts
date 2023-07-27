import {ObjKeys} from '../public';

const checkInterface = Object.keys(INTERFACE_MOCK) as ObjKeys<IMock>;
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

const checkType = Object.keys(TYPE_MOCK) as ObjKeys<TMock>;
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