interface Student {
  readonly id: number;
  name: string;
  age?: number; // optional
}

let student1: Student = {
  id: 1,
  name: "Rohit"
};

let student2: Student = {
  id: 2,
  name: "Amit",
  age: 22
};

// student1.id = 5 ❌ not allowed

console.log(student1);
console.log(student2);
