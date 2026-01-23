// Generic Function
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));

// Generic Array Function
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst([1, 2, 3]));
console.log(getFirst(["A", "B", "C"]));
