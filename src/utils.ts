function isObject<O extends Record<string, unknown>>(obj: O): boolean {
    return obj !== null && !Array.isArray(obj) && typeof obj === 'object';
}