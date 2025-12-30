// Use type when:

// You need unions (|)

// You need intersections (&)

// You’re defining primitives, tuples, or complex combinations

type User1 = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user2: User1 = {
  id: 3,
  name: "Jamie",
  isAdmin: true,
};
