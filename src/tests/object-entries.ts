import {ObjEntries} from '../public';

const checkInterface = Object.entries(INTERFACE_MOCK) as ObjEntries<IMock>;
checkInterface.map((item, index) => {
    switch (index) {
        case 0:
            item[0] === 'name' && item[1] === '';
            break;
        case 1:
            item[0] === 'age' && item[1] === 1;
            break;
        case 2:
            item[0] === 'address' && isObject(item[1]);
            break;
    }
});

const checkType = Object.entries(TYPE_MOCK) as ObjEntries<TMock>;
checkType.map((item, index) => {
    switch (index) {
        case 0:
            item[0] === 'name' && item[1] === '';
            break;
        case 1:
            item[0] === 'age' && item[1] === 1;
            break;
        case 2:
            item[0] === 'address' && isObject(item[1]);
            break;
    }
});

// TODO: enum