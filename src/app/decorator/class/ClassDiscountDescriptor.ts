export function ClassDiscountDescriptor(payloadRequest) {

    return function (target) {

        target.constructor.prototype.ngOnDestroy = function () {
            payloadRequest.machineStopDate = new Date();
            Object.defineProperty(target, 'discountItem', { value: payloadRequest, writable: true });
        }
        const discountItem = { value: payloadRequest, writable: false };
        Object.defineProperty(target, 'discountItem', discountItem);

    }


}
