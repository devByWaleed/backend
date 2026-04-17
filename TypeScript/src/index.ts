// Basic types
// let id: number = 5;
let company: string = "abc"
let isApplied: boolean = false;
let x: any = "Hello";

// Array
let nums: number[] = [1, 2, 3, 4];

// Tuple
let names: [string, boolean] = ["a", false];

// Tuple Array
let employee: [number, string][];
employee = [
    [1, "Emp1"],
    [2, "Emp2"],
]

// console.log(employee);
// console.log(typeof (employee));

// Union
let pid: string | number
pid = "22"

// enums
enum Direction1 {
    // Up = 1,
    Up,
    Down,
    Left,
    Right
}
// console.log(Direction1.Right);   // Up = 1, then should be 4
// console.log(Direction1.Up);


// Objects
/*
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "Waleed"
}

console.log(user);
*/


// 2nd option
/*
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "Waleed"
}

console.log(user);
*/


// Type Assertion
/*
let cid: any = 1
console.log(typeof (cid));

let customerID = <number>cid
console.log(typeof (customerID));
*/


// Function With Types, No Type will throw error
/*
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(5, 6));
*/



// Function With Any Types, No Type will throw error
/*
function addNum(message: string | number): void {
    console.log(message)
}

addNum("Hello World");
*/



// Interfaces, can be used in objects only
/*
interface User {
    id: number,
    name: string,

    // Property, to be optional
    age?: number
}

const user: User = {
    id: 1,
    name: "Waleed"
}

console.log(user);
*/



// Interfaces With Functions
/*
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

console.log(add(5, 6));
console.log(sub(5, 6));
*/



// Classes
/*
class Person {
    id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.id} registered`
    }
}

const person1 = new Person(1, "waleed")
console.log(person1);
// person1.name = "malik"       // Through error
// console.log(person1);
console.log(person1.register());

class Employee extends Person {
    position: string

    constructor(id: number, position: string) {
        super(id, position)
        this.position = position
    }

    register() {
        return `${this.id} registered on ${this.position} post`
    }
}

const emp = new Employee(3, "Developer")
console.log(emp);
*/




// Generics
/*
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3])
let strArray = getArray<string>(["Waleed", "Ahmed", "Abdullah"])

// bcz we apply generics
numArray.push("hello")
*/