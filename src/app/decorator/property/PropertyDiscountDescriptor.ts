export function PropertyDiscountDescriptor(target, key) {
    window.setTimeout(() => {
        const machineStartDate = { machineStartDate: new Date() };
        const discountItem = Object.assign(target.constructor.discountItem, machineStartDate);
        const item = { writable: false, value: discountItem };
        Object.defineProperty(target, key, item);
    }, 0)

}
