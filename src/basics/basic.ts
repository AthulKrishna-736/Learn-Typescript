let message: string = 'Hello world'

let count = 10

interface Person4 {
    name: string,
    age: number,
}

let user5: Person4 = { name: 'Alice', age: 30 }

function identity<T> (arg: T): T {
    return arg;
}

let output = identity<string>("hello")

