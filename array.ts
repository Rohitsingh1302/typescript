// 1️⃣ Simple Array
let numbers: number[] = [10, 20, 30];
numbers.push(40);

// 2️⃣ String Array
let names: string[] = ["Rohit", "Amit", "Sumit"];

// 3️⃣ Mixed Array (Union Type)
let mixed: (number | string)[] = [1, "two", 3];

// 4️⃣ Tuple (Fixed order & type)
let userTuple: [number, string] = [1, "Rohit"];

// 5️⃣ Object with Type
let student: {
  name: string;
  age: number;
  isPassed: boolean;
} = {
  name: "Rohit",
  age: 21,
  isPassed: true
};

// 6️⃣ Array of Objects (VERY IMPORTANT 🔥)
let users: {
  id: number;
  name: string;
}[] = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rohit" }
];

// 7️⃣ Readonly Array
let scores: readonly number[] = [90, 80, 70];
// scores.push(100); ❌ not allowed

// Output
console.log(numbers);
console.log(names);
console.log(mixed);
console.log(userTuple);
console.log(student);
console.log(users);
console.log(scores);
