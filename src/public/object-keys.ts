/**
 * @description type `ObjKeys<Obj>` intended for typing Object.keys() method
 *
 * @usage
 *
 * interface IUser {
 *     name: string;
 *     age: number;
 *     address: {
 *         country: string;
 *         city: string;
 *         ZIP: number;
 *     };
 * }
 *
 * `const keys = Object.keys() as ObjKeys<IUser>;` // keys - 'name' | 'age' | 'address'
 */

export type ObjKeys<Obj> = (keyof Obj)[];