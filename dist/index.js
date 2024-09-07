"use strict";
let id = 5;
let company = "Hello";
let isDone = true;
let x = 0.0;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
let person = [1, "John", true];
let employee;
employee = [
    [1, "John"],
    [2, "Joe"],
    [3, "Jane"],
];
let union_id = 30;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "John",
};
let cid = 1;
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
console.log(addNum(5, 9));
const user_alt = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
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
