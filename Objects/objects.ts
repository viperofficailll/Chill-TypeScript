/****************************************************
 * OBJECTS & UTILITY TYPES IN TYPESCRIPT
 * Learning file for students
 *
 * Topics covered:
 * 1. Basic objects
 * 2. Typed objects
 * 3. type vs interface
 * 4. Optional & readonly properties
 * 5. Objects in functions
 * 6. Arrays of objects
 * 7. Utility types:
 *    - Partial
 *    - Pick
 *    - Omit
 *    - Readonly
 * 8. Practice exercises
 ****************************************************/

/*--------------------------------------------------
  1. BASIC OBJECT
--------------------------------------------------*/

const student = {
  name: "Alex",
  age: 16,
  isEnrolled: true,
};

console.log(student.name);

/*--------------------------------------------------
  2. OBJECT WITH EXPLICIT TYPES
--------------------------------------------------*/

const teacher: {
  name: string;
  subject: string;
  experience: number;
} = {
  name: "Ms. Rivera",
  subject: "Math",
  experience: 8,
};

/*--------------------------------------------------
  3. USING TYPE
--------------------------------------------------*/

type Student = {
  name: string;
  age: number;
  grade: number;
};

const student1: Student = {
  name: "Jordan",
  age: 15,
  grade: 10,
};

/*--------------------------------------------------
  4. USING INTERFACE
--------------------------------------------------*/

interface Book {
  title: string;
  author: string;
  pages: number;
}

const book1: Book = {
  title: "Learning TypeScript",
  author: "John Doe",
  pages: 250,
};

/*--------------------------------------------------
  5. OPTIONAL PROPERTIES
--------------------------------------------------*/

interface User3 {
  username: string;
  email?: string;
}

const user: User3 = {
  username: "coder123",
};

/*--------------------------------------------------
  6. READONLY PROPERTIES
--------------------------------------------------*/

interface School {
  readonly id: number;
  name: string;
}

const mySchool: School = {
  id: 101,
  name: "Green Valley High",
};

// mySchool.id = 202;

/*--------------------------------------------------
  7. OBJECTS IN FUNCTIONS
--------------------------------------------------*/

interface Product {
  name: string;
  price: number;
}

function printProduct(product: Product): void {
  console.log(`${product.name} costs $${product.price}`);
}

printProduct({ name: "Notebook", price: 5 });

/*--------------------------------------------------
  8. ARRAYS OF OBJECTS
--------------------------------------------------*/

interface Movie {
  title: string;
  year: number;
}

const movies: Movie[] = [
  { title: "Inception", year: 2010 },
  { title: "Interstellar", year: 2014 },
];

/*--------------------------------------------------
  9. UTILITY TYPE: PARTIAL
--------------------------------------------------*/

/*
  Partial<T>
  - Makes ALL properties optional
  - Useful for updates (edit forms, PATCH requests)
*/

interface Profile {
  username: string;
  email: string;
  age: number;
}

const updateProfile: Partial<Profile> = {
  email: "newemail@example.com",
};

/*--------------------------------------------------
  10. UTILITY TYPE: PICK
--------------------------------------------------*/

/*
  Pick<T, K>
  - Creates a new type using ONLY selected properties
*/

type UserPreview = Pick<Profile, "username" | "email">;

const preview: UserPreview = {
  username: "student123",
  email: "student@email.com",
};

/*--------------------------------------------------
  11. UTILITY TYPE: OMIT
--------------------------------------------------*/

/*
  Omit<T, K>
  - Creates a new type EXCLUDING selected properties
*/

type ProfileWithoutAge = Omit<Profile, "age">;

const profileNoAge: ProfileWithoutAge = {
  username: "student123",
  email: "student@email.com",
};

/*--------------------------------------------------
  12. UTILITY TYPE: READONLY
--------------------------------------------------*/

/*
  Readonly<T>
  - Makes ALL properties read-only
*/

type ReadonlyProfile = Readonly<Profile>;

const fixedProfile: ReadonlyProfile = {
  username: "lockedUser",
  email: "locked@email.com",
  age: 18,
};

// fixedProfile.age = 19;

/*--------------------------------------------------
  13. PRACTICE EXERCISES
--------------------------------------------------*/

/*
  Exercise 1:
  Create a type Car with brand, model, year
  Then create:
  - Partial<Car>
  - Pick<Car, "brand" | "model">
*/

type Car = {
  brand: string;
  model: string;
  year: number;
};

const carUpdate: Partial<Car> = {
  year: 2023,
};

const carPreview: Pick<Car, "brand" | "model"> = {
  brand: "Toyota",
  model: "Corolla",
};

/*
  Exercise 2:
  Create an interface Player
  Create a Readonly<Player>
*/

interface Player {
  name: string;
  score: number;
}

const finalPlayer: Readonly<Player> = {
  name: "Alex",
  score: 100,
};

// finalPlayer.score = 120;

/****************************************************
 * END OF LEARNING FILE
 ****************************************************/
