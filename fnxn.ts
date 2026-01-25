type Role = "admin" | "user";

interface User {
  readonly id: number;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
}

let users: User[] = [];

function createUser(
  id: number,
  name: string,
  email: string,
  role: Role
): User {
  return {
    id,
    name,
    email,
    role,
    isActive: true
  };
}

function addUser(user: User): void {
  users.push(user);
}

function deactivateUser(id: number): void {
  const user = users.find(u => u.id === id);
  if (user) {
    user.isActive = false;
  }
}

function listUsers(): void {
  users.forEach(user => {
    console.log(`${user.name} (${user.role}) - Active: ${user.isActive}`);
  });
}

// Usage
addUser(createUser(1, "Rohit", "rohit@gmail.com", "admin"));
addUser(createUser(2, "Amit", "amit@gmail.com", "user"));

deactivateUser(2);
listUsers();
