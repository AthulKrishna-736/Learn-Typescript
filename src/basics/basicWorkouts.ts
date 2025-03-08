import { assert } from "console";

console.log("Hello, TypeScript with Node.js!");
// ✅ Basic TypeScript with Node.js

let firstName: string = 'Dylan';
// ✅ Explicitly typed variable

let firstName1 = 'Dylan';
// ✅ Type Inference (automatically assigns type)

const json = JSON.parse("55");
console.log(typeof json);
// ✅ JSON.parse() returns 'any' type

let v: any = true;
v = 'string';
Math.round(v); // ❌ Error at runtime (v is string)
console.log(v);
// ✅ 'any' type allows reassignment (but unsafe)

const names: string[] = [];
names.push("Dylan");
// names.push(3); // ❌ Error: 3 is not a string
// names.push({ a: 'abs' }); // ❌ Error: object is not a string
// ✅ Strictly typed arrays prevent invalid data

const mixed: (string | number)[] = [1, 'two', 3];
// ✅ Union Types allow multiple data types in an array

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'coding is fun'];
// ✅ Tuples enforce a fixed structure of different types

const namedTuple: [x: number, y: number] = [55.2, 41.3];
console.log(namedTuple[0]);
console.log(namedTuple[1]);
// ✅ Named Tuples improve readability by labeling elements


function add(a: number, b: number): number {
    return a + b
}

const car: { type: string; model: string; year?: number } = {
    type: 'Toyota',
    model: 'corolla',
    year: 2009,
}


enum Direction {
    North,
    East,
    West,
    South,
}

let currDirection: Direction = Direction.North;
console.log(currDirection)

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

console.log(getStatusMessage(StatusCode.OK)) // Outputs: Request succeeded.


type CarYear = number
type CarType = string
type CarModel = string

type Car = {
    type: CarType,
    year: CarYear,
    model: CarModel,
}

const carYear: CarYear = 2001
const carModel: CarModel = 'Corolla'
const carType: CarType = 'Toyota'

const cars: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

interface Rectangle {
    height: number,
    width: number,
}

const rectangle: Rectangle = {
    height: 20,
    width: 10,
}

interface Square {
    height: number,
    width: number,
}

interface ColoredSquare extends Square {
    color: string,
}

const coloredSquare: ColoredSquare = {
    height: 20,
    width: 10,
    color: 'red'
}

interface Person {
    name: string,
    age: number,
    greet(): void,
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello my name is ${this.name}`)
    }
}

interface Employee extends Person {
    employeeId: number,
    department: string,
}


function printStatusCode (code: string | number) {
    console.log(`my status code is ${code}`)
}

printStatusCode(404)
printStatusCode('401')


function getTime(): number {
    return new Date().getTime();
}

function multiply(a: number, b: number, c?: number){
    return a * b;
}


let someValue: unknown = 'hello, typescript';
let strlength: number = (someValue as string).length;

let someValue1: unknown = 'hi typescript'
let strlength1: number = (<string>someValue1).length


class Person1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person1("Jane");
console.log(person.getName()); //person.name is not accesible from outside the class since its private


class Person2 {
    public constructor(private name: string) {}

    public getName(): string {
        return this.name
    }
}

const person1 = new Person2('athul')

class Person3 {
    private readonly name: string;

    public constructor(name: string){
        this.name = name
    }

    public getName(): string{
        return this.name;
    }
}

const person2 = new Person3('athul')


interface Shape {
    getArea: () => number;
}

class Rectangle1 implements Shape {
    public constructor(protected readonly width: number, protected readonly height : number){}

    public getArea(): number {
        return this.width * this.height;
    }
}
