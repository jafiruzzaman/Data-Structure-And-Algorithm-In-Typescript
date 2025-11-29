Absolutely! Here’s a **complete README template** for your `00_basics` folder that explains **TypeScript, its origin, and all the programming basics needed to start DSA**. You can use this as the foundation guide for your roadmap.

---

# **00_basics: TypeScript Foundation for DSA**

## **📌 What is TypeScript?**

TypeScript (TS) is a **typed superset of JavaScript** that compiles to plain JavaScript.
It adds **static typing, classes, interfaces, and type checking**, making code **safer, cleaner, and easier to maintain**, especially for large projects and complex algorithms.

TypeScript allows you to catch errors **at compile-time**, unlike JavaScript, which catches them only at runtime.

> TypeScript is widely used in frontend, backend, and even for solving **DSA problems**, making it ideal for building your **DSA mastery roadmap**.

---

## **📌 Who Created TypeScript?**

* **Creator:** Anders Hejlsberg (the same engineer who created **C#**)
* **Released:** October 2012
* **Maintained by:** Microsoft
* **Website:** [https://www.typescriptlang.org](https://www.typescriptlang.org)

---

## **📌 Why Use TypeScript for DSA?**

* Static typing helps prevent runtime errors
* Easier to write **classes and data structures** (linked list, trees, etc.)
* Improves **code readability** for complex algorithms
* Better **IDE support** (VS Code, WebStorm)
* Can compile to JavaScript for running anywhere

---

## **📌 TypeScript Basics for DSA**

### **1️⃣ Variables & Data Types**

```ts
let a: number = 10;
const b: string = "Hello";
let isActive: boolean = true;
let value: any = 42;

let numbers: number[] = [1,2,3];
let names: string[] = ["Alice","Bob"];

let person: {name: string; age: number} = {name: "Jaf", age: 22};

interface Person { name: string; age?: number; }
let p1: Person = { name: "Alice" };
```

---

### **2️⃣ Operators**

* Arithmetic: `+ - * / %`
* Assignment: `=, +=, -=, *=, /=`
* Comparison: `>, <, >=, <=, ===, !==`
* Logical: `&&, ||, !`

```ts
let x = 10, y = 3;
console.log(x + y); // 13
console.log(x > y && y < 5); // true
```

---

### **3️⃣ Conditional Statements**

```ts
let num = 10;

if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");

// Ternary
let result = num % 2 === 0 ? "Even" : "Odd";
```

---

### **4️⃣ Loops**

```ts
let arr = [1,2,3,4,5];

// For loop
for(let i=0;i<arr.length;i++) console.log(arr[i]);

// For-of loop
for(let num of arr) console.log(num);

// While loop
let i=0;
while(i<arr.length) { console.log(arr[i]); i++; }

// Do-while loop
i=0;
do { console.log(arr[i]); i++; } while(i<arr.length);
```

---

### **5️⃣ Functions**

```ts
// Normal function
function add(x:number, y:number):number { return x+y; }

// Arrow function
const multiply = (x:number, y:number):number => x*y;

// Function with default & optional parameters
function greet(name:string, msg:string="Hello"):string { return `${msg}, ${name}!`; }

// Rest parameters
function sumAll(...nums:number[]):number { return nums.reduce((acc,val)=>acc+val,0); }
```

---

### **6️⃣ Arrays**

#### **1D Array**

```ts
let arr1D: number[] = [1,2,3,4,5];
console.log(arr1D[0]); // Access
arr1D[2] = 10;        // Update
for(let num of arr1D) console.log(num); // Iterate
```

#### **2D Array**

```ts
let arr2D: number[][] = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];
console.log(arr2D[0][1]); // Access 2
for(let row of arr2D) for(let val of row) console.log(val);
```

---

### **7️⃣ Strings**

```ts
let str: string = "TypeScript";

// Access characters
console.log(str[0]); // T

// Length
console.log(str.length);

// Iterate
for(let ch of str) console.log(ch);

// Methods
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.includes("Script"));
console.log(str.indexOf("S"));
console.log(str.slice(0,4));
console.log(str.replace("Type","Java"));
```

---

### ✅ **Summary of Programming Basics for DSA**

* **Variables & Data Types** ✅
* **Operators** ✅
* **Conditional Statements** ✅
* **Loops** ✅
* **Functions** ✅
* **Arrays (1D & 2D)** ✅
* **Strings & Methods** ✅

> Once you master these basics, you’re ready to move to **recursion, OOP, and data structures** in your DSA journey.

---

