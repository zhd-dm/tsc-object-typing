/**
 * @description type `ObjEntries<Obj>` intended for typing Object.entries() method
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
 * `const entries = Object.entries() as ObjEntries<IUser>;`
 */

export type ObjEntries<Obj> = {
    [K in keyof Obj]: [K, Obj[K]];
} [keyof Obj][];