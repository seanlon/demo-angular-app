
export function Timeouter(milliseconds: number = 500): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //intercept and override behavior of designated method
        const designatedMethod = descriptor.value;
        descriptor.value = function (...args) { 
            setTimeout(() => {
                designatedMethod.apply(this, args);
                alert('Method doSomething appended');
            }, milliseconds);

        };
        console.log('descriptor ', descriptor);
        console.log('target ', target);
        console.log('propertyKey ', propertyKey);
        console.log('milliseconds ', milliseconds);

        return descriptor;
    }
};

