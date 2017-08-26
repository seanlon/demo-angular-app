
export function MethodAbcDescriptor(payloadRequest: any): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const designatedMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('MethodAbcDescriptor ');
            designatedMethod.apply(this, args);
        };
        console.log('MethodAbcDescriptor descriptor', descriptor.value);
        return descriptor;
    }
};

