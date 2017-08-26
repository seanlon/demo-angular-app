
export function MethodDiscountDescriptor(payloadRequest: any): MethodDecorator { 

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const designatedMethod = descriptor.value;
        descriptor.value = function (args: Event) {
            const classInstance = target;
            const clickedDom: HTMLElement = <HTMLElement>event.target;
            const allowedGroup = `${classInstance.discountItem.allowGroup}`;
            const allowedRate = `${classInstance.discountItem.allowRate}`;
            if (clickedDom.innerText == allowedGroup) {
                alert(`Okay you get ${allowedRate} discount on this drink today `);
            }
            else {
                alert('Sorry no discount for this drink');
            }
            designatedMethod.apply(this, args);
        };
        return descriptor;


    }
};

