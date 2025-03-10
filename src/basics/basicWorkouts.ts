// ✅ Basic TypeScript with Node.js
console.log("Hello, TypeScript with Node.js!");

// ✅ Explicitly typed variable
let firstName: string = 'Dylan';

// ✅ Type Inference (automatically assigns type)
let firstName1 = 'Dylan';

// ✅ JSON.parse() returns 'any' type
const json = JSON.parse("55");
console.log(typeof json);

// ✅ 'any' type allows reassignment (but unsafe)
let v: any = true;
v = 'string';
Math.round(v); // ❌ Error at runtime (v is string)
console.log(v);

// ✅ Strictly typed arrays prevent invalid data
const names: string[] = [];
names.push("Dylan");
// names.push(3); // ❌ Error: 3 is not a string

// ✅ Union Types allow multiple data types in an array
const mixed: (string | number)[] = [1, 'two', 3];

// ✅ Tuples enforce a fixed structure of different types
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'coding is fun'];

// ✅ Named Tuples improve readability
const namedTuple: [x: number, y: number] = [55.2, 41.3];
console.log(namedTuple[0]);
console.log(namedTuple[1]);

// ✅ Function with explicit parameter and return types
function add(a: number, b: number): number {
    return a + b;
}

// ✅ Object with optional properties
const car: { type: string; model: string; year?: number } = {
    type: 'Toyota',
    model: 'corolla',
    year: 2009,
}

// ✅ Enums define named constants
enum Direction {
    North,
    East,
    West,
    South,
}
let currDirection: Direction = Direction.North;
console.log(currDirection);

// ✅ Enum with custom values
enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
}

function getStatusMessage(code: StatusCode): string {
    switch (code) {
        case StatusCode.OK:
            return 'Request success';
        case StatusCode.BadRequest:
            return 'Bad request';
        case StatusCode.Unauthorized:
            return 'Unauthorized access';
        case StatusCode.NotFound:
            return 'Resource not found';
        default:
            return 'Unknown status code';
    }
}
console.log(getStatusMessage(StatusCode.OK));

// ✅ Type Aliases for readability
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    type: CarType,
    year: CarYear,
    model: CarModel,
}
const cars: Car = {
    year: 2001,
    type: 'Toyota',
    model: 'Corolla'
};

// ✅ Interfaces enforce structure
interface Rectangle {
    height: number,
    width: number,
}
const rectangle: Rectangle = { height: 20, width: 10 };

// ✅ Extending interfaces
interface Square {
    height: number,
    width: number,
}
interface ColoredSquare extends Square {
    color: string,
}
const coloredSquare: ColoredSquare = { height: 20, width: 10, color: 'red' };

// ✅ Class implementing an interface
interface Person {
    name: string,
    age: number,
    greet(): void,
}
class Employee implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(): void {
        console.log(`Hello my name is ${this.name}`);
    }
}

// ✅ Union types in function parameters
function printStatusCode(code: string | number) {
    console.log(`my status code is ${code}`);
}
printStatusCode(404);
printStatusCode('401');

// ✅ Function returning current timestamp
function getTime(): number {
    return new Date().getTime();
}

// ✅ Function with optional parameter
function multiply(a: number, b: number, c?: number) {
    return a * b;
}

// ✅ Type Assertions
let someValue: unknown = 'hello, typescript';
let strlength: number = (someValue as string).length;

let someValue1: unknown = 'hi typescript';
let strlength1: number = (<string>someValue1).length;

// ✅ Class with private property
class Person1 {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
const person = new Person1("Jane");
console.log(person.getName());

// ✅ Class with readonly property
class Person3 {
    private readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
const person2 = new Person3('athul');

// ✅ Interface and Class Implementation
interface Shape {
    getArea: () => number;
}
class Rectangle1 implements Shape {
    constructor(protected readonly width: number, protected readonly height: number) { }
    public getArea(): number {
        return this.width * this.height;
    }
}

// ✅ Class with private and protected properties
class Animal {
    public species: string;
    private age: number;
    protected habitat: string;
    constructor(species: string, age: number, habitat: string) {
        this.species = species;
        this.age = age;
        this.habitat = habitat;
    }
    public getAge(): number {
        return this.age;
    }
}

class Bird extends Animal {
    constructor(species: string, age: number, habitat: string) {
        super(species, age, habitat);
    }
    public getHabitat(): string {
        return this.habitat;
    }
}
const eagle = new Bird('Eagle', 5, 'Mountains');
console.log(eagle.species);
console.log(eagle.getAge());

// ✅ Class with readonly properties
class Book {
    readonly title: string;
    readonly author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}
const myBook = new Book('1984', 'George Orwell');
console.log(myBook.title);

// ✅ Inheritance Example
class Animal1 {
    constructor(public name: string) {}
    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}
class Dog extends Animal1 {
    bark() {
        console.log('woof woof!');
    }
}
const myDog = new Dog('Buddy');
myDog.bark();
myDog.move(10);


abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon area = ${this.getArea()}`
    }
}

class Rectangle3 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number){
        super()
    }

    public getArea(): number {
        return this.width * this.height
    }
}

interface Swimmer {
    swim(distance: number): void;
}

class Fish implements Swimmer {
    constructor(public name: string){}

    public swim(distance: number): void {
        console.log(`${this.name} swam ${distance} meters`)
    }
}

const fish = new Fish('Goldfish')
fish.swim(5);


class Animal2 {
    public makeSound(): void {
        console.log('malabaarrrrr rrrrrr prrrrr')
    }
}

class Dog1 extends Animal2 {
    public makeSound(): void {
        console.log('woof woof!')
    }
}

const animal2 = new Animal2()
animal2.makeSound()

const dog1 = new Dog1()
dog1.makeSound()

abstract class Animal3 {
    constructor(public name: string){}

    abstract makeSound(): void;

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters`)
    }
}

class Cat extends Animal3 {
    constructor(name: string) {
        super(name)
    }
    public makeSound(): void {
        console.log('meow!')
    }
}

const cat = new Cat('whiskers')
cat.makeSound()
cat.move(5)


interface User {
    name: string;
    age: number;
}

const partialUser: Partial<User> = { name: 'Alice' };

interface User1 {
    name?: string;
    age?: number;
}

const user: Required<User1> = { name: 'Alice', age: 30 };

interface User2 {
    name: string;
    age: number;
}

const user1: Readonly<User2> = { name: 'Alice', age: 30 }

// user1.age = 32 // error cant assign its readonly

interface User3 {
    name: string;
    age: number;
    email: string;
}

const user2: Pick<User3, 'name' | 'email'> = { name: 'Alice', email: 'alice@example.com' }

interface User4 {
    name: string;
    age: number;
    email: string;
}

const user3: Omit<User4, 'age'> = { name: 'alice', email: 'sample@gmail.com' }


const scores: Record<string, number> = {
    alice: 90,
    bob: 85,
};

type T = Exclude<'a' | 'b' | 'c', 'a'>;

type T1 = NonNullable<string | number | undefined>;

function greet(name: string, age: number): void {
    console.log(`Hello, ${name}. You are ${age} years old.`)
}

type Params = Parameters<typeof greet>


interface Person4 {
    name: string;
    age: number;
}

function printPersonProperties(person: Person, properties: keyof Person){
    console.log(`Printing person property `)
}



