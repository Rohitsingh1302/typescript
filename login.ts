type LoginInput = string | number;

function login(user: LoginInput) {
  if (typeof user === "string") {
    console.log(`Logging in with username: ${user}`);
  } else {
    console.log(`Logging in with OTP: ${user}`);
  }
}

login("rohit123");
login(456789);
