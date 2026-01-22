// ===== TYPE =====
type UserType = {
  id: number;
  name: string;
  isAdmin: boolean;
};

// Using type
let user1: UserType = {
  id: 1,
  name: "Rohit",
  isAdmin: true
};


// ===== INTERFACE =====
interface UserInterface {
  id: number;
  name: string;
  isAdmin: boolean;
}

// Using interface
let user2: UserInterface = {
  id: 2,
  name: "Amit",
  isAdmin: false
};


// ===== EXTENDING =====

// type extends type
type AdminType = UserType & {
  role: string;
};

let admin1: AdminType = {
  id: 3,
  name: "Suresh",
  isAdmin: true,
  role: "Manager"
};

// interface extends interface
interface AdminInterface extends UserInterface {
  role: string;
}

let admin2: AdminInterface = {
  id: 4,
  name: "Ravi",
  isAdmin: true,
  role: "HR"
};


// ===== UNION WITH TYPE =====
type ID = number | string;
let userId: ID = "A101";


// ===== OUTPUT =====
console.log(user1);
console.log(user2);
console.log(admin1);
console.log(admin2);
console.log("User ID:", userId);
