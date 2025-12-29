/* Basically  Type-Annotation means we give the info that this thing is going to have this type */

function add(a: number, b: number): number {
  return a + b;
}

/*
a: number and b: number → parameters must be numbers

: number → function returns a number


*/

interface User {
  id: number;
  name: string;
  email?: string;
}

type ApiResponse<T> = {
  data: T;
  error: string | null;
};

function getUserResponse(user: User | null): ApiResponse<User> {
  if (user) {
    return {
      data: user,
      error: null,
    };
  }

  return {
    data: { id: 0, name: "Unknown" },
    error: "User not found",
  };
}

/*
Explanation:

interface User → custom object type

email?: string → optional property

User | null → union type
ApiResponse<T> → generic type

Strong typing helps catch errors at compile time */
