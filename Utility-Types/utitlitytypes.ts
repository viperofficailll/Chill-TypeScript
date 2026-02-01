// Base User type
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  role: "admin" | "user" | "guest";
  isActive: boolean;
};

// Partial<T> - Makes all properties optional
type PartialUser = Partial<User>;
const userUpdate: PartialUser = { name: "John" }; // Can update just one field

// Required<T> - Makes all properties required (if User had optional fields)
type RequiredUser = Required<User>;
const completeUser: RequiredUser = {
  id: 1,
  name: "Alice",
  email: "a@test.com",
  password: "123",
  age: 25,
  role: "admin",
  isActive: true,
};

// Readonly<T> - Makes all properties immutable
type ReadonlyUser = Readonly<User>;
const immutableUser: ReadonlyUser = {
  id: 1,
  name: "Bob",
  email: "b@test.com",
  password: "123",
  age: 30,
  role: "user",
  isActive: true,
};

// Pick<T, K> - Picks only specific properties
type UserProfile = Pick<User, "id" | "name" | "email">;
const profile: UserProfile = { id: 1, name: "Charlie", email: "c@test.com" }; // Only public info

// Omit<T, K> - Omits specific properties
type PublicUser = Omit<User, "password">;
const publicUser: PublicUser = {
  id: 1,
  name: "Dave",
  email: "d@test.com",
  age: 28,
  role: "user",
  isActive: true,
}; // No password

// Record<K, T> - Creates object with User as value type
type UsersById = Record<number, User>;
const users: UsersById = {
  1: {
    id: 1,
    name: "Eve",
    email: "e@test.com",
    password: "123",
    age: 22,
    role: "admin",
    isActive: true,
  },
};

// Exclude<T, U> - Excludes specific union members
type NonGuestRole = Exclude<User["role"], "guest">;
const adminRole: NonGuestRole = "admin"; // Can be 'admin' or 'user', not 'guest'

// Extract<T, U> - Extracts specific union members
type AdminRole = Extract<User["role"], "admin">;
const onlyAdmin: AdminRole = "admin"; // Can only be 'admin'

// NonNullable<T> - Removes null and undefined
type DefiniteUser = NonNullable<User | null | undefined>;
const guaranteedUser: DefiniteUser = {
  id: 1,
  name: "Frank",
  email: "f@test.com",
  password: "123",
  age: 35,
  role: "user",
  isActive: false,
};
