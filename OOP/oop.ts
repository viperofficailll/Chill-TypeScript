class animal {
  color: string;
  price: number;

  constructor(color: string, price: number) {
    (this.color = color), (this.price = price);
  }
}

const myanimal = new animal("red", 4);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Sandesh", 22);
p1.greet();

///encapsulation

class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());

/// inheritance

class Animal {
  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking");
  }
}

const dog = new Dog();
dog.eat();
dog.bark();

//interface 

interface User5 {
  name: string;
  email1: string;
}

class Admin implements User5 {
  name: string;
  email1: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email1 = email;
  }
}

const admin = new Admin("Sandesh", "sandesh@gmail.com");
