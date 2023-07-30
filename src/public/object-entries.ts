export type ObjEntries<Obj> = {
    [K in keyof Obj]: [K, Obj[K]];
} [keyof Obj][];