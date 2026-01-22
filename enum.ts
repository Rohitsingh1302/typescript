// ===== Numeric Enum =====
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log("Move:", move); // 0


// ===== String Enum =====
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING"
}

let apiStatus: Status = Status.Success;
console.log("API Status:", apiStatus);


// ===== Enum in Function =====
function checkStatus(status: Status): void {
  if (status === Status.Success) {
    console.log("Data loaded successfully");
  } else if (status === Status.Error) {
    console.log("Something went wrong");
  } else {
    console.log("Loading...");
  }
}

checkStatus(Status.Loading);


// ===== Enum with Object =====
interface Task {
  id: number;
  title: string;
  status: Status;
}

let task1: Task = {
  id: 1,
  title: "Learn TypeScript",
  status: Status.Success
};

console.log(task1);
