/**
 * @copyright 2025 Mohammad Jafiruzzaman
 *  @description Typescript foundation
 */

// ============================
// 1️⃣ Variables & Data Types
// ============================

// 🔢 number
let num: number = 10;
const pi: number = 3.1416;

// 🔤 string
let type: string = "TypeScript";

// 💯 boolean
let isCoder: boolean = true;

// 📃 array
let number: number[] = [1, 2, 3, 4, 5];
let strArray: string[] = ["Mohammad", "Jafiruzzaman"];

// tuple: Tuple is like an array with a fixed number of elements with specific types for each element
/*
 * the first element must be a string
 * the second element must be a number
 */

let tuple: [string, number] = ["Mohammad", 2025];

// Object with type Annotation
let person: { name: string; age: number } = {
  name: "Mohammad",
  age: 23,
};

// ============================
// 2️⃣ Operators
// ============================
let x:number = 10, y:number=3;
// arithmetic Operator
console.log(x + y); // Plus
console.log(x - y); // Minus
console.log(x * y); // Times
console.log(x / y); // Divide
console.log(x % y); // Modulo

// assignment Operator
x+=2;
y*=3;

// comparison & conditional Operator
console.log(x > y && x < y); // Return true if and only-if the both condition becomes true
console.log( x=== y || x > y); // Return true if and only-if one condition become true
console.log(!(x===y)); // It turns the result true to false or false to true

// ============================
// 3️⃣ Conditional Statements
// ============================
let num1:number = -5;
if(num1 > 0) console.log("Positive");
else if(num1 <0) console.log("Negative");
else console.log("Zero");

// Ternary Operator
let result:string = num1 % 2 === 0 ? "Even" : "Odd";
console.log(result);

// ============================
// 4️⃣ Loops
// ============================
let arr:number[] = [1, 2, 3, 4, 5];

// 🔁 for-loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 🔁 while loop
let i:number = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// 🔁 do-while loop
i = 6;
do{
  console.log(arr[i]); // result will be undefined arr[6] not exist
  i++;
}while(i < arr.length);


// ============================
// 5️⃣ Functions
// ============================

// Normal Function
function sayHello():void {
  console.log("👋 there");
}
sayHello();

// Arrow function
const sayHi = ():void =>{
  console.log("👋 hi")
}
sayHi();

// Function with default & Optional parameter
function greet(name:string,message:string="👋 Hi"):string {
  return `${message}, ${name}`;
}

let message = greet("Mohammad","Hello there")
console.log(message);


// ============================
// 6️⃣ Arrays
// ============================
let arr1D:number[] = [1, 2, 3, 4, 5];
console.log(arr1D[0]); // Accessing
arr1D[2] = 10;
console.log(arr1D[2]);
// iterating the loop
for (let item of arr1D) {
  console.log(item+" ");
}

// 2d Array
let arr2D:number[][] = [[1,2,3],[4,5,6],[7,8,9]];
console.table(arr2D);

// iterate 2D array
for (let i:number = 0; i <arr2D.length; i++) {
  for (let j:number = 0; j < arr2D[i].length; j++) {
    console.log(arr2D[i][j]);
  }
  console.log();
}

// using for-of loop
for (let row of arr2D) {
  for (let value of row) {
    console.log(value);
  }
  console.log();
}

// ============================
// 7️⃣ Strings
// ============================

let str:string = "TypeScript";
console.log(str);
console.log(str[0]); // Access first character
console.log(str.length); // length of the string

// iterating the string
for(let ch:number=0;ch<str.length;ch++) {
  console.log(str[ch]);
}
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("Script","Isciript"));
console.log(str.split(""));
console.log(str.slice(0,4));

