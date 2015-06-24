export function * flatten () {
    for ( const item of this ) {
        yield * item;
    }
};
