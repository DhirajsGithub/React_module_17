// primitives : string, number, boolean, etc
// more complex / object : array, object, set, map, etc
// function types, parameters

let age: number = 23;    // n is small case ==> poiniting to primitives

age = 24;

let username : string;    // s is small case ==> pointing to primitives
username = 'max';   // "max"

// more complex types 
let hobbies : string [];
hobbies = ["coding", "gym"];

// let person : any ;    // by default type, but what use of typescript then

let person : {
    name : string,
    age : number
}
// any object of name person will have key value pair of type string and age only

person={
    name: 'Harshit',
    age : 34,
}
// must have both key value

// person = {
//     isBad : false
// }
// not allowed 

let people : {
    name : string,
    age : number
}[];
// array stroing people having name and age

// type inference
let course = "react-complete-guide";
// course = 34;
// since course is not explicitly set to string but we had assign string to it at the very first time hence it's type is set to string 

// union type 
let myType : string | number | string [];

myType = "shakila";
myType = ["robin", "peter", "marry"]


// type alias 
type User = {
    name : string;
    age : number;
    address : string;
}

let user1 : User;
user1 = {
    name : "tom",
    age : 23,
    address : '34 street west'
}
// all keys must be define

// function and types
// defining return type of funcition, if don't then it will automatically understood the type
function addTwoNumbers(a: number, b: number): number{
    return a+b;
}
// const result = add(2, '3');     // prewarning

// function of type void
function printAny(value : any) {
    console.log(value)
}


// Generic 

// function insertAtBeginning(array: any, value: any){
//     const newArray = [value, ...array];
//     return newArray;
// }
// const updatedArray = insertAtBeginning([2, 3, 4], -1);
// updatedArray is of type any now coz we did't explicitly tell the return type of the function

function insertAtBeginning <T> (array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}
//  we could've also set the concrete type for our placeholder T explicitly:
const updatedArray = insertAtBeginning([2, 3, 4], -1);  // now number []
// with <anyName> we specified a generic which will look the parameter and arguments and dicides the return type

const stringArray = insertAtBeginning(["me", "I", "myself"], "fuck") // string []

// const randomArray = insertAtBeginning(["me", "you", "she"], -1);    // error

