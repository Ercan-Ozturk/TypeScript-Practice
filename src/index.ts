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
console.log(addNum(5, 9));
