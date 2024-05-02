"use strict";
// Types 
// syntax let name:type = value;
let id = 5; // int
let company = "Hemavathi"; // string
let istrue = true; // boolean
let x = false; // any type it takes any data type like dynamic data type 
x = 5;
x = "hema";
let ids = [1, 2, 3, 4, 5, 6, 7, 8]; // number array -> homogeneous data type . it store only same data type 
let x1 = [1, 'd', true]; // this is list it can store multiple types in same list
// tuple
let employee = [1, "hema", true]; // the value must be same as the given format 
// tuple array 
let employees = [
    [1, "hema", true],
    [2, "bhee", false],
    [3, "Hems", true] // Type 'number' is not assignable to type 'boolean'. 6 is assigned 
];
// union
let eid;
eid = 5;
eid = "roll";
//in union we can store one or more type in a variable 
// enum 
// In enum we declare constant values -> first value assigned to 0 and incremented by 1 
// if we give any specific value , it incremented from that value 
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
// we can initialise string as well but we have assign values to every elements otherwise it will give you error
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
console.log(direction.left);
console.log(direction2.left);
// Objects 
let user = {
    id: 1,
    name: "Hema"
};
let user1 = {
    id: 1,
    name: "Hema"
};
// type assertion => one type to assigned to another type like conversion 
let x3 = 5; // we have too declase var to any and then use as keyword and provide type 
let comId = x3;
// this is same to this 
let comId1 = x3;
// function 
let d = 9; //now it will give no error 
function doMath(a, b) {
    return a + b;
}
console.log(doMath(1, 2));
function logme(x) {
    console.log(x);
}
function logme1(x5) {
    if (x5 == 'number') {
        console.log("It is Number");
    }
    else {
        console.log("It is String");
    }
}
let user2 = {
    id: 1,
    name: "Hema"
    // here we didn't assign age -> because it is optional parameter 
};
user2.id = 5;
const add = (x, y) => x + y;
const add1 = (x, y) => x - y;
const add2 = (x, y) => x * y;
// class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log('Hi this is constructor');
    }
    register() {
        return `${this.name} is registered now`;
    }
}
const obj1 = new Person(1, "hema");
const obj2 = new Person(1, "hema");
const obj3 = new Person(1, "hema");
console.log(obj1, obj2, obj3);
console.log(obj1.register());
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log('Hi this is constructor');
    }
    register() {
        return `${this.name} is registered now`;
    }
}
// inheritance 
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(5, 'Hema', 'Developer');
console.log(emp1.register());
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['a', 'b']);
numArray.push('Hema');
// here we can push string to number array 
// push number to string array to avoid this we use generrics we specified in T .
// The type is assigned to it if any other type we push it will give error 
function getArray1(items) {
    return new Array().concat(items);
}
numArray.push(1);
strArray.push("Hema");
