interface UserFormData {
  username: string;
  email: string;
  password: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

function validateForm(data: UserFormData): ValidationResult {
  const errors: string[] = [];

  if (data.username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }

  if (!data.email.includes("@")) {
    errors.push("Invalid email format");
  }

  if (data.password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

const form1: UserFormData = {
  username: "Ro",
  email: "rohitgmail.com",
  password: "123"
};

const result = validateForm(form1);

if (!result.isValid) {
  console.log("Form Errors:");
  result.errors.forEach(e => console.log("•", e));
}
