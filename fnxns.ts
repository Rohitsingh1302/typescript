// 1️⃣ Normal Function
function add(a: number, b: number): number {
  return a + b;
}

// 2️⃣ Arrow Function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// 3️⃣ Function with Optional Parameter
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, Age: ${age}`;
  }
  return `Hello ${name}`;
}

// 4️⃣ Default Parameter
function welcome(city: string = "Delhi"): string {
  return `Welcome to ${city}`;
}

// 5️⃣ Union Type in Function
function printId(id: number | string): void {
  console.log("ID:", id);
}

// 6️⃣ Void Function
function showMessage(): void {
  console.log("This function returns nothing");
}

// Function Calls
console.log("Add:", add(10, 20));
console.log("Multiply:", multiply(5, 4));
console.log(greet("Rohit"));
console.log(greet("Rohit", 21));
console.log(welcome());
console.log(welcome("Mumbai"));
printId(101);
printId("A101");
showMessage();
