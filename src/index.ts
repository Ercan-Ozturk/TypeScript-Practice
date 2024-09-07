let id: number = 5;
let company: string = "Hello";
let isDone: boolean = true;
let x: any = 0.0;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

let person: [number, string, boolean] = [1, "John", true];

let employee: [number, string][];

employee = [
  [1, "John"],
  [2, "Joe"],
  [3, "Jane"],
];

let union_id: number | string = 30;

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John",
};

let cid: any = 1;
let customerId = <number>cid;

function addNum(x: number, y: number): number {
  return x + y;
}
function log(message: string | number): void {
  console.log(message);
}
console.log(addNum(5, 9));

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const user_alt: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered.`;
  }
}
const ercan = new Person(1, "Ercan Ozturk");

console.log(ercan.register());
console.log(ercan);
