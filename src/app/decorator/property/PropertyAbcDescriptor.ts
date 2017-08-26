export function PropertyAbcDescriptor(target, key) {
    console.log('PropertyAbcDescriptor ');
    console.log('PropertyAbcDescriptor target', target);
    console.log('PropertyAbcDescriptor key', key);

    Object.defineProperty(target, key, { value: 'initialized', writable: false });
    console.log('PropertyAbcDescriptor key', Object.getOwnPropertyDescriptor(target, key));

}
