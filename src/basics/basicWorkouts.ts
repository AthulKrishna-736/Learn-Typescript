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
names.push(3); // ❌ Error: 3 is not a string
names.push({ a: 'abs' }); // ❌ Error: object is not a string
// ✅ Strictly typed arrays prevent invalid data

const mixed: (string | number)[] = [1, 'two', 3]; 
// ✅ Union Types allow multiple data types in an array

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'coding is fun'];
// ✅ Tuples enforce a fixed structure of different types

const namedTuple: [x:number, y:number] = [55.2, 41.3];
console.log(namedTuple[0]);
console.log(namedTuple[1]);
// ✅ Named Tuples improve readability by labeling elements
