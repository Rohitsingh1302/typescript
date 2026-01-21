// 1️⃣ Basic Typed Variables
let name1: string = "Rohit";
let age: number = 21;
let isStudent: boolean = true;

// 2️⃣ Type Inference
let city = "Delhi";        // auto string
let pincode = 110001;      // auto number

// 3️⃣ any type
let data: any = "Hello";
data = 100;
data = true;

// 4️⃣ unknown type
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 5️⃣ Union Type
let id: number | string;
id = 101;
id = "A101";

// 6️⃣ const vs let
const country: string = "India";
let score: number = 90;
score = 95;

// Output
console.log("Name:", name1);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("City:", city);
console.log("Pincode:", pincode);
console.log("Any Data:", data);
console.log("ID:", id);
console.log("Country:", country);
console.log("Score:", score);
