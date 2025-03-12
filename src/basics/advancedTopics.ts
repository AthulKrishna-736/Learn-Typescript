//decorators
function sealed(constructor: Function) {
    console.log(constructor, constructor.prototype)
    constructor.prototype.sayHello = function () {
        console.log('hello from decorator!');
    }
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(constructor.prototype)
}


@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return `Hello, ${this.greeting}`
    }
}

const greet1 = new Greeter('athul')


function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} called with arguments: ${JSON.stringify(args)}`)
        return originalMethod.apply(this, args);
    }
}


class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator()
calc.add(2, 3);


function trackLastCall(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (!target.lastCalled) {
        Object.defineProperty(target, 'lastCalled', {
            value: null,
            writable: true,
            enumerable: true,
            configurable: true,
        })
    }
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        target.lastCalled = new Date();
        (this as any).lastCalleds = new Date()
        return originalMethod.apply(this, args)
    }
}


class Test {
    @trackLastCall
    greet() {
        console.log('Hello!');
    }
}


const obj = new Test()
obj.greet()
console.log(obj)

function addLastCalled<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        lastCalled: Date = new Date();
    };
}

@addLastCalled
class Test1 { }
const obj1 = new Test1()
console.log((obj1 as any).lastCalled)


function readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}

class Person {
    @readonly
    name: string = 'John Doe';
}

// const person1 = new Person();
// person1.name = 'athul';
// console.log(person1.name)


function toUpperCase(target: any, propertyKey: string) {
    let value: string;

    Object.defineProperty(target, propertyKey, {
        get: () => value,
        set: (newValue: string) => {
            value = newValue.toUpperCase();
        },
    });
}

class User {
    @toUpperCase
    username: string = ''

    constructor(name: string) {
        this.username = name;
    }
}

const user4 = new User('athul')
console.log(user4.username);

function minValue(min: number) {
    return function (target: any, propertyKey: string) {
        let value: number;

        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: (newValue: number) => {
                value = newValue < min ? min : newValue;
            }
        })
    }
}

class Product {
    @minValue(10)
    price: number = 0;

    constructor(price: number) {
        this.price = price;
    }
}

const item = new Product(5)
console.log(item.price)



class Logger {
    log(message: string) {
        console.log(message)
    }
}

class MockLogger {
    log(message: string) {
        console.log(`[mock] ${message}`);
    }
}

class UserService {
    constructor(private logger: Logger) { }

    createUser(name: string) {
        this.logger.log(`User ${name} create.`)
    }
}

// const logger = new Logger()
const mockLogger = new MockLogger();
const userService = new UserService(mockLogger);
userService.createUser('Alice');


function Logger2(target: Function) {
    console.log(`Logging class: ${target.name}`)
}

@Logger2
class Person2 {
    constructor(public name: string) {
        console.log(`Person create: ${this.name}`)
    }
}

const p1 = new Person2('Athul')

function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${methodName} called with args: ${args}`);
        return originalMethod.apply(this, args);
    }
}

class MathOperation {
    @LogMethod
    add(a: number, b: number): number {
        return a + b
    }
}

const math = new MathOperation()
console.log(math.add(2, 3))



class Service {
    getMessage() {
        return 'Hello from service!';
    }
}

class Consumer {
    constructor(private service: Service) { }

    privateMessage() {
        console.log(this.service.getMessage())
    }
}

const serviceInstance = new Service()
const consumerInstance = new Consumer(serviceInstance);
consumerInstance.privateMessage();









