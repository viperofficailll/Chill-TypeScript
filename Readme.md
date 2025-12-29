# TypeScript Complete Learning Guide

A comprehensive guide to learning TypeScript from basics to advanced concepts.

## Table of Contents

1. [Introduction to TypeScript](#1-introduction-to-typescript)
2. [Setting Up TypeScript](#2-setting-up-typescript)
3. [Basic Types](#3-basic-types)
4. [Type Annotations](#4-type-annotations)
5. [Functions](#5-functions)
6. [Interfaces](#6-interfaces)
7. [Type Aliases](#7-type-aliases)
8. [Union and Intersection Types](#8-union-and-intersection-types)
9. [Literal Types](#9-literal-types)
10. [Enums](#10-enums)
11. [Arrays and Tuples](#11-arrays-and-tuples)
12. [Objects](#12-objects)
13. [Classes](#13-classes)
14. [Access Modifiers](#14-access-modifiers)
15. [Getters and Setters](#15-getters-and-setters)
16. [Static Members](#16-static-members)
17. [Abstract Classes](#17-abstract-classes)
18. [Generics](#18-generics)
19. [Generic Constraints](#19-generic-constraints)
20. [Type Assertions](#20-type-assertions)
21. [Type Guards](#21-type-guards)
22. [Utility Types](#22-utility-types)
23. [Modules](#23-modules)
24. [Namespaces](#24-namespaces)
25. [Decorators](#25-decorators)

---

## 1. Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's a superset of JavaScript that compiles to plain JavaScript.

**Key Benefits:**
- Static type checking
- Enhanced IDE support
- Better code documentation
- Easier refactoring
- Catches errors at compile time

**Example:**
```typescript
// JavaScript
function add(a, b) {
  return a + b;
}

// TypeScript
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 2. Setting Up TypeScript

**Installation:**
```bash
# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version

# Initialize a TypeScript project
tsc --init
```

**Compiling TypeScript:**
```bash
# Compile a single file
tsc filename.ts

# Watch mode
tsc --watch

# Compile entire project
tsc
```

**Basic tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## 3. Basic Types

TypeScript provides several basic types for common data structures.

```typescript
// Number
let age: number = 25;
let price: number = 99.99;

// String
let firstName: string = "John";
let message: string = `Hello ${firstName}`;

// Boolean
let isActive: boolean = true;
let isComplete: boolean = false;

// Any (avoid when possible)
let data: any = "could be anything";
data = 42;
data = true;

// Unknown (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void (for functions that don't return)
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never (for functions that never return)
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## 4. Type Annotations

Type annotations explicitly specify the type of a variable, parameter, or return value.

```typescript
// Variable annotations
let username: string = "Alice";
let score: number = 100;
let isLoggedIn: boolean = true;

// Function parameter annotations
function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old`;
}

// Return type annotations
function multiply(a: number, b: number): number {
  return a * b;
}

// Multiple variable declarations
let x: number, y: number, z: number;
x = 5;
y = 10;
z = 15;

// Type inference (TypeScript infers the type)
let inferredString = "This is a string"; // TypeScript knows this is a string
let inferredNumber = 42; // TypeScript knows this is a number
```

---

## 5. Functions

Functions in TypeScript can have typed parameters and return types.

```typescript
// Basic function
function add(x: number, y: number): number {
  return x + y;
}

// Optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return `${firstName} ${lastName}`;
  return firstName;
}

// Default parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Function type expressions
let myAdd: (x: number, y: number) => number = function(x, y) {
  return x + y;
};

// Arrow functions
const multiply = (a: number, b: number): number => a * b;

// Function overloads
function process(input: string): string;
function process(input: number): number;
function process(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input * 2;
}
```

---

## 6. Interfaces

Interfaces define the structure of objects and can be used to enforce type checking.

```typescript
// Basic interface
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};

// Optional properties
interface Product {
  id: number;
  name: string;
  description?: string; // optional
}

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: cannot reassign readonly property

// Function types in interfaces
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(src, sub) {
  return src.search(sub) > -1;
};

// Extending interfaces
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever"
};

// Multiple inheritance
interface Movable {
  speed: number;
}

interface Flyable {
  altitude: number;
}

interface Bird extends Movable, Flyable {
  wingspan: number;
}
```

---

## 7. Type Aliases

Type aliases create a new name for a type, useful for unions, tuples, and complex types.

```typescript
// Basic type alias
type ID = string | number;

let userId: ID = "abc123";
let productId: ID = 12345;

// Object type alias
type Person = {
  name: string;
  age: number;
  email?: string;
};

const person: Person = {
  name: "Alice",
  age: 30
};

// Function type alias
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

// Union type alias
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";

// Complex type alias
type Response<T> = {
  data: T;
  status: number;
  message: string;
};

type UserResponse = Response<Person>;

// Intersection type alias
type Admin = Person & {
  role: string;
  permissions: string[];
};
```

---

## 8. Union and Intersection Types

**Union Types** allow a value to be one of several types.

```typescript
// Basic union
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 42;

// Function with union parameter
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// Union with literal types
type Direction = "north" | "south" | "east" | "west";
let heading: Direction = "north";
```

**Intersection Types** combine multiple types into one.

```typescript
// Basic intersection
type Colorful = {
  color: string;
};

type Circle = {
  radius: number;
};

type ColorfulCircle = Colorful & Circle;

const cc: ColorfulCircle = {
  color: "red",
  radius: 10
};

// Mixing interfaces and types
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

const customer: Customer = {
  name: "ABC Corp",
  credit: 50000,
  email: "contact@abc.com",
  phone: "123-456-7890"
};
```

---

## 9. Literal Types

Literal types allow you to specify exact values a variable can have.

```typescript
// String literal types
type Easing = "ease-in" | "ease-out" | "ease-in-out";

function animate(easing: Easing) {
  // easing can only be one of the three strings
}

animate("ease-in"); // OK
// animate("linear"); // Error

// Numeric literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
  return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}

// Boolean literal types
type Success = true;
type Failure = false;

// Mixed literal types
type Result = "success" | "error" | 0 | 1;

// With objects
type ButtonSize = "small" | "medium" | "large";

interface Button {
  label: string;
  size: ButtonSize;
}

const submitButton: Button = {
  label: "Submit",
  size: "large"
};
```

---

## 10. Enums

Enums allow you to define a set of named constants.

```typescript
// Numeric enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let dir: Direction = Direction.Up;

// Custom numeric values
enum Status {
  Pending = 1,
  Approved = 2,
  Rejected = 3
}

// String enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let favoriteColor: Color = Color.Blue;

// Heterogeneous enum (mixed)
enum Mixed {
  No = 0,
  Yes = "YES"
}

// Const enum (more efficient)
const enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

let status: HttpStatus = HttpStatus.OK;

// Using enums
function respond(status: Status): string {
  switch(status) {
    case Status.Pending:
      return "Request is pending";
    case Status.Approved:
      return "Request approved";
    case Status.Rejected:
      return "Request rejected";
  }
}
```

---

## 11. Arrays and Tuples

**Arrays:**

```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Alternative syntax
let strings: Array<string> = ["a", "b", "c"];

// Array of objects
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a project", completed: false }
];

// Multi-dimensional arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Union type arrays
let mixed: (string | number)[] = [1, "two", 3, "four"];
```

**Tuples:**

```typescript
// Basic tuple
let person: [string, number] = ["Alice", 30];

// Tuple with optional elements
let response: [number, string?] = [200];
response = [404, "Not Found"];

// Tuple with rest elements
let scores: [string, ...number[]] = ["Math", 95, 87, 92];

// Named tuples
type Point3D = [x: number, y: number, z: number];
let point: Point3D = [10, 20, 30];

// Destructuring tuples
let [name, age] = person;

// Readonly tuples
let readonlyTuple: readonly [string, number] = ["fixed", 100];
// readonlyTuple[0] = "changed"; // Error
```

---

## 12. Objects

TypeScript provides several ways to type objects.

```typescript
// Object type annotation
let user: { name: string; age: number; email: string } = {
  name: "John",
  age: 25,
  email: "john@example.com"
};

// Optional properties
let product: { id: number; name: string; price?: number } = {
  id: 1,
  name: "Laptop"
};

// Readonly properties
let config: { readonly apiKey: string; timeout: number } = {
  apiKey: "abc123",
  timeout: 5000
};
// config.apiKey = "new"; // Error

// Index signatures
interface Dictionary {
  [key: string]: string;
}

let translations: Dictionary = {
  hello: "bonjour",
  goodbye: "au revoir"
};

// Nested objects
interface Address {
  street: string;
  city: string;
  country: string;
}

interface Employee {
  id: number;
  name: string;
  address: Address;
}

let employee: Employee = {
  id: 1,
  name: "Jane",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

// Record utility type
type UserRoles = "admin" | "user" | "guest";
type Permissions = Record<UserRoles, string[]>;

let permissions: Permissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};
```

---

## 13. Classes

Classes in TypeScript add type checking to JavaScript classes.

```typescript
// Basic class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

let person = new Person("Alice", 30);

// Class with methods
class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }
}

// Inheritance
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  bark(): void {
    console.log("Woof! Woof!");
  }
}

let dog = new Dog("Buddy", "Golden Retriever");
dog.move(10);
dog.bark();

// Implementing interfaces
interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  draw(): void {
    console.log(`Drawing circle with radius ${this.radius}`);
  }
}
```

---

## 14. Access Modifiers

Access modifiers control the visibility of class members.

```typescript
// Public (default)
class PublicExample {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Private
class PrivateExample {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  private validatePassword(): boolean {
    return this.password.length >= 8;
  }
}

// Protected
class ProtectedExample {
  protected id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Extended extends ProtectedExample {
  showId(): void {
    console.log(this.id); // OK, accessible in subclass
  }
}

// Parameter properties
class User {
  constructor(
    public name: string,
    private email: string,
    protected role: string
  ) {}
}

// Equivalent to:
// class User {
//   public name: string;
//   private email: string;
//   protected role: string;
//   
//   constructor(name: string, email: string, role: string) {
//     this.name = name;
//     this.email = email;
//     this.role = role;
//   }
// }

// Readonly modifier
class ReadonlyExample {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

let example = new ReadonlyExample(1);
// example.id = 2; // Error: cannot assign to readonly property
```

---

## 15. Getters and Setters

Getters and setters provide controlled access to object properties.

```typescript
class Employee {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > 0) {
      this._fullName = newName;
    } else {
      console.log("Error: Name cannot be empty");
    }
  }
}

let employee = new Employee();
employee.fullName = "John Doe"; // Calls setter
console.log(employee.fullName); // Calls getter

// More complex example
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero");
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = (value - 32) * 5/9;
  }
}

let temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77

temp.fahrenheit = 32;
console.log(temp.celsius); // 0
```

---

## 16. Static Members

Static members belong to the class itself rather than instances.

```typescript
// Static properties
class MathUtils {
  static PI: number = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.PI); // Access without instance
console.log(MathUtils.calculateCircumference(5));

// Static and instance members
class Counter {
  static count: number = 0;
  id: number;

  constructor() {
    Counter.count++;
    this.id = Counter.count;
  }

  static getCount(): number {
    return Counter.count;
  }
}

let c1 = new Counter();
let c2 = new Counter();
console.log(Counter.getCount()); // 2

// Static blocks (ES2022)
class Database {
  static connection: string;

  static {
    // Static initialization block
    Database.connection = "Connected to database";
  }
}

// Singleton pattern using static
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
```

---

## 17. Abstract Classes

Abstract classes are base classes that cannot be instantiated directly.

```typescript
// Basic abstract class
abstract class Shape {
  abstract getArea(): number;

  describe(): void {
    console.log(`Area: ${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

let rect = new Rectangle(10, 5);
rect.describe(); // Area: 50

let circle = new Circle(5);
circle.describe(); // Area: 78.54

// Abstract properties
abstract class Vehicle {
  abstract wheels: number;
  
  abstract start(): void;
  
  stop(): void {
    console.log("Vehicle stopped");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
  
  start(): void {
    console.log("Car started");
  }
}

// Complex example
abstract class Employee {
  constructor(public name: string, public salary: number) {}

  abstract calculateBonus(): number;

  getTotalCompensation(): number {
    return this.salary + this.calculateBonus();
  }
}

class Manager extends Employee {
  calculateBonus(): number {
    return this.salary * 0.2;
  }
}

class Developer extends Employee {
  calculateBonus(): number {
    return this.salary * 0.1;
  }
}
```

---

## 18. Generics

Generics allow you to write flexible, reusable code that works with multiple types.

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello");
let output2 = identity<number>(42);

// Generic with type inference
let output3 = identity("world"); // TypeScript infers string

// Generic array function
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let firstNum = getFirstElement([1, 2, 3]); // number | undefined
let firstStr = getFirstElement(["a", "b"]); // string | undefined

// Generic interface
interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "hello" };
let numberBox: Box<number> = { value: 42 };

// Generic class
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let result = pair<string, number>("age", 25);

// Generic with default type
interface Response<T = any> {
  data: T;
  status: number;
}

let response: Response = { data: "anything", status: 200 };
let typedResponse: Response<string> = { data: "typed", status: 200 };
```

---

## 19. Generic Constraints

Generic constraints limit the types that can be used with generics.

```typescript
// Basic constraint
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
logLength({ length: 10, value: 3 }); // OK
// logLength(42); // Error: number doesn't have length

// Using keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person = { name: "Alice", age: 30, email: "alice@example.com" };
let name = getProperty(person, "name"); // OK
let age = getProperty(person, "age"); // OK
// let invalid = getProperty(person, "invalid"); // Error

// Generic class with constraint
class Collection<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
}

let products = new Collection<Product>();
products.add({ id: 1, name: "Laptop", price: 999 });

// Multiple constraints
interface Printable {
  print(): void;
}

interface Serializable {
  serialize(): string;
}

class Document<T extends Printable & Serializable> {
  constructor(private data: T) {}

  process(): void {
    this.data.print();
    console.log(this.data.serialize());
  }
}
```

---

## 20. Type Assertions

Type assertions tell TypeScript to treat a value as a specific type.

```typescript
// Using "as" syntax (preferred)
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Angle-bracket syntax (not usable in JSX)
let anotherValue: unknown = "another string";
let anotherLength: number = (<string>anotherValue).length;

// Asserting to more specific type
interface Cat {
  name: string;
  meow(): void;
}

interface Dog {
  name: string;
  bark(): void;
}

let pet = { name: "Fluffy", meow: () => console.log("Meow") };
let cat = pet as Cat;
cat.meow();

// Const assertions
let person = {
  name: "Alice",
  age: 30
} as const; // Makes all properties readonly

// person.age = 31; // Error: cannot modify readonly property

// Array const assertion
let colors = ["red", "green", "blue"] as const;
// colors[0] = "yellow"; // Error

// Non-null assertion operator
function processValue(value: string | null): void {
  console.log(value!.toUpperCase()); // ! tells TS value is not null
}

// Double assertion (escape hatch, use sparingly)
let value = "hello" as unknown as number; // Not recommended

// Asserting DOM elements
let input = document.getElementById("myInput") as HTMLInputElement;
input.value = "some value";

// Better alternative with type guard
let element = document.getElementById("myInput");
if (element instanceof HTMLInputElement) {
  element.value = "some value";
}
```

---

## 21. Type Guards

Type guards narrow down types within conditional blocks.

```typescript
// typeof type guard
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows it's string
  } else {
    console.log(value.toFixed(2)); // TypeScript knows it's number
  }
}

// instanceof type guard
class Bird {
  fly(): void {
    console.log("Flying");
  }
}

class Fish {
  swim(): void {
    console.log("Swimming");
  }
}

function move(animal: Bird | Fish): void {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim();
  }
}

// in operator type guard
interface Car {
  drive(): void;
}

interface Boat {
  sail(): void;
}

function operate(vehicle: Car | Boat): void {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

// Custom type guard
interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

function makeSound(pet: Dog | Cat): void {
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

// Truthiness narrowing
function printLength(str: string | null | undefined): void {
  if (str) {
    console.log(str.length); // TypeScript knows str is string
  }
}

// Equality narrowing
function compare(x: string | number, y: string | boolean): void {
  if (x === y) {
    // TypeScript knows both are string here
    console.log(x.toUpperCase());
    console.log(y.toLowerCase());
  }
}

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

---

## 22. Utility Types

TypeScript provides built-in utility types for common type transformations.

```typescript
// Partial<T> - Makes all properties optional
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, updates: Partial<User>): void {
  // Can pass any combination of User properties
}

updateUser(1, { name: "Alice" });
updateUser(2, { name: "Bob", email: "bob@example.com" });

// Required<T> - Makes all properties required
interface PartialUser {
  id?: number;
  name?: string;
  email?: string;
}

type CompleteUser = Required<PartialUser>;

// Readonly<T> - Makes all properties readonly
type ReadonlyUser = Readonly<User>;
let user: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" };
// user.name = "Bob"; // Error

// Record<K, T> - Creates object type with keys K and values T
type Roles = "admin" | "user"