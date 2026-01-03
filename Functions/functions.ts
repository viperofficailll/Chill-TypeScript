/****************************************************
 * FUNCTIONS IN TYPESCRIPT
 * Learning file for students
 *
 * Topics covered:
 * 1. Basic functions
 * 2. Typed parameters & return values
 * 3. Optional & default parameters
 * 4. Arrow functions
 * 5. Void & never
 * 6. Functions with objects
 * 7. Function types
 * 8. Generics with functions
 * 9. Utility types with functions
 * 10. Practice exercises
 ****************************************************/

/*--------------------------------------------------
  1. BASIC FUNCTION
--------------------------------------------------*/

function greet() {
  console.log("Hello!");
}

greet();


/*--------------------------------------------------
  2. TYPED PARAMETERS & RETURN VALUE
--------------------------------------------------*/

function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);


/*--------------------------------------------------
  3. OPTIONAL PARAMETERS
--------------------------------------------------*/

function greetUser(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("Hello, guest");
  }
}

greetUser();
greetUser("Alex");


/*--------------------------------------------------
  4. DEFAULT PARAMETERS
--------------------------------------------------*/

function multiply(a: number, b: number = 2): number {
  return a * b;
}

multiply(5);
multiply(5, 3);


/*--------------------------------------------------
  5. ARROW FUNCTIONS
--------------------------------------------------*/

const subtract = (a: number, b: number): number => {
  return a - b;
};

const divide = (a: number, b: number): number => a / b;


/*--------------------------------------------------
  6. VOID & NEVER
--------------------------------------------------*/

/*
  void:
  - Function does not return a value
*/

function logMessage(message: string): void {
  console.log(message);
}

/*
  never:
  - Function never finishes normally
*/

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong"); // 


/*--------------------------------------------------
  7. FUNCTIONS WITH OBJECT PARAMETERS
--------------------------------------------------*/

interface User {
  username: string;
  age: number;
}

function printUser(user: User): void {
  console.log(`${user.username} is ${user.age} years old`);
}

printUser({ username: "student1", age: 16 });


/*--------------------------------------------------
  8. FUNCTION TYPES
--------------------------------------------------*/

/*
  Function type definition
*/

type MathOperation = (a: number, b: number) => number;

const addNumbers: MathOperation = (a, b) => a + b;
const multiplyNumbers: MathOperation = (a, b) => a * b;


/*--------------------------------------------------
  9. GENERIC FUNCTIONS
--------------------------------------------------*/

/*
  Generics allow functions to work with many types
*/

function identity11<T>(value: T): T {
  return value;
}

identity11<number>(5);
identity11<string>("Hello");
identity11<boolean>(true);


/*--------------------------------------------------
  10. GENERICS WITH ARRAYS
--------------------------------------------------*/

function getFirstElement1<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);


/*--------------------------------------------------
  11. UTILITY TYPES WITH FUNCTIONS
--------------------------------------------------*/

/*
  Parameters<T>
  - Gets the parameter types of a function
*/

function createUser(username: string, age: number) {
  return { username, age };
}

type CreateUserParams = Parameters<typeof createUser>;
// Result: [string, number]

/*
  ReturnType<T>
  - Gets the return type of a function
*/

type CreateUserReturn = ReturnType<typeof createUser>;
// Result: { username: string; age: number }


/*--------------------------------------------------
  12. CALLBACK FUNCTIONS
--------------------------------------------------*/

function processNumber(
  value: number,
  callback: (num: number) => number
): number {
  return callback(value);
}

processNumber(5, num => num * 2);
processNumber(10, num => num + 10);


/*--------------------------------------------------
  13. PRACTICE EXERCISES
--------------------------------------------------*/
