// Types 

// syntax let name:type = value;

let id:number =5; // int
let company:string ="Hemavathi"; // string
let istrue : boolean =true; // boolean
let x:any =false; // any type it takes any data type like dynamic data type 
x=5;
x="hema";

let ids:number[] =[1,2,3,4,5,6,7,8] // number array -> homogeneous data type . it store only same data type 
let x1:any =[1,'d',true] // this is list it can store multiple types in same list

// tuple
let employee:[number,string,boolean] =[1,"hema",true] // the value must be same as the given format 

// tuple array 
let employees :[number,string,boolean] []=[
    [1,"hema",true],
    [2,"bhee",false],
    [3,"Hems",true]// Type 'number' is not assignable to type 'boolean'. 6 is assigned 
] 

// union
let eid : string |number ; 
eid =5;
eid ="roll";
//in union we can store one or more type in a variable 

// enum 
// In enum we declare constant values -> first value assigned to 0 and incremented by 1 
// if we give any specific value , it incremented from that value 
enum direction {
    up,
    down,
    left,
    right
}

// we can initialise string as well but we have assign values to every elements otherwise it will give you error
enum direction2 {
    up ="up",
    down ="down",
    left ="left",
    right ="right"
}
console.log(direction.left)
console.log(direction2.left)

// Objects 

let user : {id:number , name:string} = 
{
    id:1,
    name:"Hema"
}

// This is same to the above code we just clean up the given code 

type userType = 
{
    id:number,
    name:string
}

let user1 :userType = 
{
    id:1,
    name:"Hema"
}

// type assertion => one type to assigned to another type like conversion 

let x3 : any =5 // we have too declase var to any and then use as keyword and provide type 
let comId =x3 as number;
// this is same to this 
let comId1 = <number> x3;

// function 

let d=9; //now it will give no error 
function doMath(a:number,b:number):number
{
    return a+b;
}
console.log(doMath(1,2));

function logme(x:string):void
{
    console.log(x);
}

function logme1(x5: number | string):void
{
    if(x5=='number')
    {
        console.log("It is Number");
    }
    else
    {
        console.log("It is String");
    }
}

// interface 
// we cant assign interface to any union 
interface userType1  
{
    readonly id:number, // in readonly we can't change the value
    name:string
    age?:number // whenever qn mark it is optional
}

let user2 :userType = 
{
    id:1,
    name:"Hema"
    // here we didn't assign age -> because it is optional parameter 
}

user2.id=5;

interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc =(x:number , y:number)=>x+y
const add1:MathFunc =(x:number , y:number)=>x-y
const add2:MathFunc =(x:number , y:number)=>x*y

// class
class Person{
    private id:number // private element can't access
    name:string

    constructor(id:number , name:string)
    {
        this.id=id;
        this.name=name
        console.log('Hi this is constructor');
    }

    register()
    {
        return `${this.name} is registered now`;
    }
}

const obj1 = new Person(1,"hema")

const obj2 = new Person(1,"hema")

const obj3 = new Person(1,"hema")

console.log(obj1,obj2,obj3);
console.log(obj1.register());

// Data modifier 

interface PersonType{
    id:number,
    name:string,
    register():string
}

class Person1 implements PersonType{
     id:number // private element can't access
    name:string

    constructor(id:number , name:string)
    {
        this.id=id;
        this.name=name
        console.log('Hi this is constructor');
    }

    register()
    {
        return `${this.name} is registered now`;
    }
}

// inheritance 

class Employee extends Person1
{
    position:string

    constructor(id:number , name:string , position:string)
    {
        super(id,name)
        this.position=position
    }
}

const emp1 = new Employee(5,'Hema','Developer')
console.log(emp1.register())

// generics
function getArray(items:any[]):any[]
{
    return new Array().concat(items);
}

let numArray = getArray([1,2,3,4,5])
let strArray = getArray(['a','b'])

numArray.push('Hema');

// here we can push string to number array 
// push number to string array to avoid this we use generrics we specified in T .
// The type is assigned to it if any other type we push it will give error 

function getArray1<T>(items:T[]):T[]{
    return new Array().concat(items);
}
numArray.push(1)
strArray.push("Hema")
