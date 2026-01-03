// Use interface when:

// Defining object shapes

// Working with classes

// You want extendability

interface User2 {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user1: User2 = {
  id: 1,
  name: "Alex",
  isAdmin: false,
};

interface Admin extends User2 {
  permissions: string[];
}

const admin1: Admin = {
  id: 2,
  name: "Sam",
  isAdmin: true,
  permissions: ["read", "write"],
  email1:"chilll@gmil"
};
