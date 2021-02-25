import 'reflect-metadata';

export function controller(routePrefix: string) {
    // whenever we apply decorator to class, the Function calls on the constructor function
    return function(target: Function) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];

            const path = Reflect.getMetadata('path', target.prototype, key);
        }
    }
}