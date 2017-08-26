export function ClassAbcDescriptor(message) { 
    console.log('ClassAbcDescriptor ');
    return function (target) {
        console.log('Our decorated class', target);
    }
}
