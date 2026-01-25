class BankAccount {
  protected balance: number;
  readonly accountNumber: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ₹${amount}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  private interestRate: number = 0.05;

  addInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Interest added: ₹${interest}`);
  }
}

const acc = new SavingsAccount(12345, 10000);
acc.deposit(5000);
acc.addInterest();
console.log("Final Balance:", acc.getBalance());
