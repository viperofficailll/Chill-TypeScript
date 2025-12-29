// A type guard is a check that tells TypeScript which type a value has at runtime. Type guards enable type narrowing.

//using instance of
// if (user instanceof Admin) {
//   user.accessAdminPanel();
// }

let x = 5;

//using typeof
if (typeof x === "number") {
  console.log(x + 5);
}

///using in

type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // Dog
  } else {
    animal.meow(); // Cat
  }
}
